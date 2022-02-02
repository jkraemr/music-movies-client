//  Import React into the file + allow to create new instances of the generic React.Component component
import React from 'react';

// Import statements to import MovieCard / MovieView components into MainView component
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

// export keyword = exposes MainView component = make it available (importable) for use by other components, modules, files
// class keyword states that component is a class component (opposed to a function component)
// MainView = component's name
// React.Component = template/blueprint for creating new components
export class MainView extends React.Component {

  // constructor method = React uses this method to create the component. The code inside it will be the first thing to be executed for a component, hence this method represents the moment a component is created in the memory.
  constructor() {
    // super = initializes the component's state = needed when component needs a local state, can otherwise be ommited
    super();
    this.state = {
      // Starting value of the MainView state is initialized with an object containing movies that holds an array of movies
      movies: [
        { _id: 1, Title: 'Inception', Description: 'desc1...', ImagePath: '...' },
        { _id: 2, Title: 'The Shawshank Redemption', Description: 'desc2...', ImagePath: '...' },
        { _id: 3, Title: 'Gladiator', Description: 'desc3...', ImagePath: '...' }
      ],
      selectedMovie: null
    };
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  // render(); function = returns the visual representation of the component = renders what is displayed on screen using JSX = can only have one root element (fix/wrap several root elements with <React.Fragment></React.Fragment> or shorthand <></>)
  render() {
    // const { movies, selectedMovie } = this.state is ES 6 featured called "object destruction"
    const { movies, selectedMovie } = this.state;

    // JSX: assign classes to elements with className oppsed to class
    if (movies.length === 0) return <div className='main-view'>No movies listed yet.</div>;

    return (
      <div className='main-view'>
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
          // map() method = maps through the movies array, for each element in an array
          : movies.map(movie => (
            // key = helps React to distinguish between similar elements in list / find respective element that needs to be changed = needed when there is a list of elements of the same type rendered next to each other = here, a list of <div></div> elements) = uses unique ID property of each movie
            <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }} />
          ))
        }
      </div>
    );
  }
}