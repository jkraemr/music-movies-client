//  Import React into the file + allow to create new instances of the generic React.Component component
import React from 'react';
// Axios is a promise-based HTTP Client for node.js and the browser, here used to fetch the movies, then set the state of movues using "this.setState"
import axios from 'axios';

// Import statements to import LoginView / MovieCard / MovieView components into MainView component
// LoginView is imported into MainView at the top of the code as it will need to get the user details from the MainView, to pass the user details to LoginView
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

// export keyword = exposes MainView component, make it available (importable) for use by other components, modules, files
// class keyword states that component is a class component (opposed to a function component)
// MainView = component's name
// React.Component = template/blueprint for creating new components
export class MainView extends React.Component {
  // constructor method = React uses this method to create the component. The code inside it will be the first thing to be executed for a component, hence this method represents the moment a component is created in the memory
  // constructor() method is the starting point of any class component
  constructor() {
    // super = initializes the component's state = needed when component needs a local state, may otherwise be ommited. super() calls tbe parent React.Component's constructor which will give the class the actual React component's features. Also initializes the component's 'this' variable. Calling super()is mandatory whenever the constructor() methods will be included. 
    super();
    // code executed right when the component is created in the memory, happens before "rendering" the component

    // After super() method any extra code can be added which needs to be exectured the moment the component is created. 
    // Only with constructor() method implemented, any extra code can be included to be executed at the point where the component is created (e.g. initialize the state of component with default values)

    // Component's state = set of variables with special rules which a) serve to store data so that it can be used later on, b) represent what the UI should look like
    this.state = {
      // Starting value of the MainView state is initialized with an object containing movies that holds an array of movies
      movies: [],
      // Add new state variable into this copoment's state object called selectedMovie, initial value is null which tells the app that no movie vards were clicked, if there is a click, selectedMovie is updated to refer to the movie object that was clicked
      selectedMovie: null,
      // user property is initialized to null in the state (default is logged out), When the app is first run or when a user has logged out, there is no user that is logged in, hence setting the user to null.
      user: null
    };
  }

  // code executed right after the component is added to the DOM
  // good place to add a) code for performing async tasks such as making ajax requests or adding event listeners, e.g. fetch list of movies from database when MainView is mounted b) key bindings (event listeners for events such as "keydown", "keyup")
  componentDidMount() {
    axios.get('https://mymusicmovies.herokuapp.com/movies')
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  setSelectedMovie(newSelectedMovie) {
    // To change a state, React requuires the this.setState method which always takes an object that contains the new value that is supposed to be assigned to a spcific state in the form of a key-value pair:
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }
  // onLoggedIn() method will be passed as a prop with the same name to LoginView (does not need to be the same name), method will update the 'user' state of the MainView component and will be called when the user has successfully logged in
  // LoginView is rendered as long as there is no user in the state, as the 'user' property will be null in the MainView state.
  onLoggedIn(user) {
    this.setState({
      user
    });
  }

  // render() method is the only mandatory method for a component, so long as a component has a render() method, it is a class component
  // render(); function returns the visual representation of the component, renders what is displayed on screen using JSX, can only have one root element (fix/wrap several root elements with <React.Fragment></React.Fragment> or shorthand <></>)
  render() {
    // const { movies, selectedMovie } = this.state is ES 6 featured called "object destruction"
    // Add state (selectedMovie) as a flag to decide whether to render a specific part of the UI (MovieView) in the MainView component
    const { movies, selectedMovie, user } = this.state;

    // If there is no user, the LoginView is rendered. If there is a user logged in, the user details are passed as a prop to the LoginView
    if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

    // JSX: assign classes to elements with className opposed to class
    // Returned div only displays an empty <div className='main-view' /> rather than the earlier message "List is empty" which is even a better/simpler solution than displaying "Loading" etc.
    if (movies.length === 0) return <div className='main-view' />;

    return (
      <div className='main-view'>
        {/* if the state of 'selectedMovie' is not null,ehge selected movie will be returned, otherwise all movies will be returned */}
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
          // map() method = maps through the movies array, for each element in an array
          : movies.map(movie => (
            // key = helps React to distinguish between similar elements in list / find respective element that needs to be changed, needed when there is a list of elements of the same type rendered next to each other, here a list of <div></div> elements), uses unique ID property of each movie
            // movie={movie} = custom attribute called 'props' which passes data to a child component, here: use movie data within the MovieCard component, the movie object is passed from each iteration of the map() function to <MovieCard key={movie._id} />
            // To change the state, a function from the MainView component is passed to <MovieCard /> as a prop that executes this.state.selectedMovie = movie;. This way this.state.selectedMovie will be identifiable by its owner, the MainView. Also, it will rightfully change its own state once the function is called
            <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }} />
          ))
        }
      </div>
    );
  }
}
