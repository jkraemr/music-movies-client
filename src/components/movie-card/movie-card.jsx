import React from 'react';

export class MovieCard extends React.Component {
  render() {
    // props are used to pass data from a parent component's (e.g., MainView) state to one of its child components (this one), here to extract data, get the passed data by accessing a props property, similar to how the data are accessed from this.state
    // also extracting the onMovieClick prop using object destructuring
    const { movie, onMovieClick } = this.props;

    // use onMovieClick prop in the callback function for the onClick event listener, add callback function to onClick, added logic to execute once a click event is registered which is onMovieClick(movie); , movue passed to onMovieClick(...); is the prop wich has been extracted earlier. 
    return <div className='movie-card' onClick={() => { onMovieClick(movie); }}>{movie.Title}</div>;
  }
}