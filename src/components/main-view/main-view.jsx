//  Import React into the file + allow to create new instances of the generic React.Component component
import React from 'react';

// Import statements to import MovieCard / MovieView components into MainView component
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

// export keyword = exposes MainView component, make it available (importable) for use by other components, modules, files
// class keyword states that component is a class component (opposed to a function component)
// MainView = component's name
// React.Component = template/blueprint for creating new components
export class MainView extends React.Component {
  // constructor method = React uses this method to create the component. The code inside it will be the first thing to be executed for a component, hence this method represents the moment a component is created in the memory.
  constructor() {
    // super = initializes the component's state = needed when component needs a local state, may otherwise be ommited
    super();
    // Component's state = set of variables with special rules which a) serve to store data so that it can be used later on, b) represent what the UI should look like
    this.state = {
      // Starting value of the MainView state is initialized with an object containing movies that holds an array of movies
      movies: [
        { _id: 1, Title: 'Pulse', Description: 'Pulse is a concert video by Pink Floyd of their 20 October 1994 concert at Earls Court, London, England during The Division Bell Tour. It was originally released on VHS and Laserdisc in June 1995, with a DVD release coming in July 2006, the latter release containing numerous bonus features.', ImagePath: '...' },
        { _id: 2, Title: 'Pink Floyd: Live at Pompeii', Description: 'Pink Floyd: Live at Pompeii is a 1972 concert documentary film directed by Adrian Maben and featuring the English rock group Pink Floyd performing at the ancient Roman amphitheatre in Pompeii, Italy.', ImagePath: '...' },
        { _id: 3, Title: 'Control', Description: 'Control is a 2007 British biographical film about the life of Ian Curtis, singer of the late-1970s English post-punk band Joy Division. It is the first feature film directed by Anton Corbijn, who had worked with Joy Division as a photographer.', ImagePath: '...' }
      ],
      // Add new state variable into this copoment's state object called selectedMovie, initial value is null which tells the app that no movie vards were clicked, if there is a click, selectedMovie is updated to refer to the movie object that was clicked
      selectedMovie: null
    };
  }

  setSelectedMovie(newSelectedMovie) {
    // To change a state, React requuires the this.setState method which always takes an object that contains the new value that is supposed to be assigned to a spcific state in the form of a key-value pair:
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  // render(); function returns the visual representation of the component, renders what is displayed on screen using JSX, can only have one root element (fix/wrap several root elements with <React.Fragment></React.Fragment> or shorthand <></>)
  render() {
    // const { movies, selectedMovie } = this.state is ES 6 featured called "object destruction"
    // Add state (selectedMovie) as a flag to decide whether to render a specific part of the UI (MovieView) in the MainView component
    const { movies, selectedMovie } = this.state;

    // JSX: assign classes to elements with className opposed to class
    if (movies.length === 0) return <div className='main-view'>No movies listed yet.</div>;

    return (
      <div className='main-view'>
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