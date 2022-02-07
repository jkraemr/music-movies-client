import React from 'react';
import PropTypes from 'prop-types';
import './movie-card.scss';

export class MovieCard extends React.Component {
  render() {
    // props are used to pass data from a parent component's (e.g., MainView) state to one of its child components (this one), here to extract data, get the passed data by accessing a props property, similar to how the data are accessed from this.state
    // also extracting the onMovieClick prop using object destructuring
    // there are two props in the code above: one function (onMovieClick) and one object (movie)
    const { movie, onMovieClick } = this.props;

    // use onMovieClick prop in the callback function for the onClick event listener, add callback function to onClick, added logic to execute once a click event is registered which is onMovieClick(movie); , movue passed to onMovieClick(...); is the prop wich has been extracted earlier. 
    return <div className='movie-card' onClick={() => { onMovieClick(movie); }}>{movie.Title}</div>;
  }
}
// propTypes property is set on MovieCard to an object that contains special values provided as utilities by prop-types. These values help specify how MovieCard's props should look
// The props object must include a movie object (shape({...}) means that it’s an object)
// The movie prop (object) may contain a Title key; if it does, then it must be of type string
// The props object must contain onMovieClick and it must be a function

// propTypes
MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};