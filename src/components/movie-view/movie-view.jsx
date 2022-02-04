import React from 'react';
// Component that expects a prop ( named movie ), prop represents the movie object which will be passed in MainView, component will render whatever properties in the movie object are passed as a prop (here the properties: movie.Title, movie.Description, movie.ImagePath)
export class MovieView extends React.Component {
  render() {
    const { movie, onBackClick } = this.props;
    return (
      <div className='movie-view'>
        <div className='movie-image'>
          <img src={movie.ImagePath} /* alt="" */ />
        </div>
        <div className='movie-title'>
          <span className='label'>Title: </span>
          <span className='value'>{movie.Title}</span>
        </div>
        <div className='movie-description'>
          <span className='label'>Description: </span>
          <span className='value'>{movie.Description}</span>
        </div>
        <button onClick={() => { onBackClick(null); }}>Back</button>
      </div>
    );
  }
}