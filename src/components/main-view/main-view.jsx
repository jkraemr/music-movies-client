import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './main-view.scss';


export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      registered: false,
      user: null
    };
  }

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
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  onLoggedIn(user) {
    this.setState({
      user
    });
  }

  onRegister(registered) {
    this.setState({
      registered
    });
  }

  render() {
    const { movies, selectedMovie, user, registered } = this.state;

    if (registered)
      return (
        <RegistrationView
          onLoggedIn={(user) => this.onLoggedIn(user)}
          onRegister={(newUser) => this.onRegister(newUser)}
        />
      );

    if (!user)
      return (
        <LoginView
          onLoggedIn={(user) => this.onLoggedIn(user)}
          onRegister={(newUser) => this.onRegister(newUser)}
        />
      );

    if (movies.length === 0) return <div className='main-view' />;

    return (
      <div className="main-view">

        <Navbar bg="info" variant="dark">
          <Container fluid>
            <Navbar.Brand>myMusicMovies</Navbar.Brand>
            <Nav>
              <Nav.Link>All Movies</Nav.Link>
              <Nav.Link>My Favorites</Nav.Link>
              <Nav.Link>My Account</Nav.Link>
              <Nav.Link>Logout</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <br />
        <Row className='justify-content-md-center text-white'>
          {
            selectedMovie
              ? (
                <Col xl={6}>
                  <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
                </Col>
              )
              :
              movies.map(movie => (
                <Col sm={6} md={4} lg={3} xl={2} >
                  <MovieCard key={movie._id} movie={movie} onMovieClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
                </Col>
              ))
          }
        </Row>
      </div>
    );
  }
}

// propTypes
MainView.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.string),

  selectedMovie: PropTypes.shape({
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
  }),

  // onLoggedIn ?
  // onRegister ?

}