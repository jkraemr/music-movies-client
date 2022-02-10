import React from 'react';
import PropTypes from 'prop-types';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion'
import './movie-view.scss';

// Component that expects a prop ( named movie ), prop represents the movie object which will be passed in MainView, component will render whatever properties in the movie object are passed as a prop (here the properties: movie.Title, movie.Description, movie.ImagePath)

let imgURL = './img/';

export class MovieView extends React.Component {

  // 
  // keypressCallback(event) {
  //   console.log(event.key);
  // }

  // componentDidMount() {
  //   document.addEventListener('keypress', this.keypressCallback);
  // }

  // componentWillUnmount() {
  //   document.removeEventListener('keypress', this.keypressCallback);
  // }

  render() {
    const { movie, onBackClick } = this.props;
    return (

      <div className='movie-view'>

        <Row>
          <Col>
            <Card className='movie-view-card card-columns bg-dark text-white'>
              <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>{movie.Description}</Card.Text>


                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Genre: {movie.Genre.Name}</Accordion.Header>
                    <Accordion.Body>{movie.Genre.Description}</Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Director: {movie.Director.Name}</Accordion.Header>
                    <Accordion.Body>
                      <div>{movie.Director.Bio}
                      </div>
                      <div>Born: {movie.Director.Birth}</div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

              </Card.Body>

            </Card>

          </Col>

          <Col lg={4}>
            <Card>
              <Card.Img variant="top" src={imgURL + movie.ImagePath} />
            </Card>
          </Col>
        </Row>

        <br />
        <br />

        <Row>
          <Col>
            <Button variant="info" onClick={() => { onBackClick(null); }}>Back</Button>
          </Col>
        </Row>



        {/* <div className='movie-image'>
          <img src={imgURL + movie.ImagePath} width="300" />
        </div>
        <div className='movie-title'>
          <span className='label'>Title: </span>
          <span className='value'>{movie.Title}</span>
        </div>
        <div className='movie-description'>
          <span className='label'>Description: </span>
          <span className='value'>{movie.Description}</span>
        </div>
        <div className='movie-genre-name'>
          <span className='label'>Genre: </span>
          <span className='value'>{movie.Genre.Name}</span>
        </div>
        <div className='movie-genre-description'>
          <span className='label'>Genre Description: </span>
          <span className='value'>{movie.Genre.Description}</span>
        </div>
        <div className='movie-director-name'>
          <span className='label'>Director: </span>
          <span className='value'>{movie.Director.Name}</span>
        </div>
        <div className='movie-director-bio'>
          <span className='label'>Bio: </span>
          <span className='value'>{movie.Director.Bio}</span>
        </div>
        <div className='movie-director-birth'>
          <span className='label'>Birth Year: </span>
          <span className='value'>{movie.Director.Birth}</span>
        </div>
        <button onClick={() => { onBackClick(null); }}>Back</button> */}

      </div >

    );
  }
}

// propTypes
MovieView.propTypes = {
  movie: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
    }).isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string,
      Birth: PropTypes.string,
    }).isRequired,
    ImagePath: PropTypes.string.isRequired,
    Featured: PropTypes.bool.isRequired,
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
};