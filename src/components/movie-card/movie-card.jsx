import React from 'react';

export class MovieCard extends React.Component {
  render() {
    // props property = pass data from the component's state to one of its child components = extract data = get the passed data by accessing a props property, similar to how the data arre accessed from this.state
    const { movie, onMovieClick } = this.props;

    return <div className='movie-card' onClick={() => { onMovieClick(movie); }}>{movie.Title}</div>;
  }
}