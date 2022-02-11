import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './login-view.scss';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Declare hook for each input
  const [usernameErr, setUsernameErr] = useState('');
  const [passwordErr, setPasswordErr] = useState()'';

  // Validate user inputs
  const validate = () => {
    let isReq = true;
    if (!username) {
      setUsernameErr('Please enter a username');
      isReq = false;
    } else if (username.length < 2) {
      setUsernameErr('Please make sure your username contains at least 2 characters.');
      isReq = false;
    }
    if (!password) {
      setPasswordErr('Password required');
      isReq = false;
    } else if (password.length < 8) {
      setPasswordErr('Password must be at least 8 characters long');
      isReq = false;
    }
    return isReq;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if (isReq) {
      // send auth request to server
      axios.post('https://mymusicmovies.herokuapp.com/login', {
        Username: username,
        Password: password
      })
        .then(response => {
          const data = response.data;
          console.log(data);
          props.onLoggedIn(data);
        })
        .catch(e => {
          console.log('no such user found')
        });
    }
  };

  const handleRegistration = () => {
    props.onRegister(true);
  };

  return (

    <div className='login-view'>

      <Navbar bg="info" variant="dark">
        <Container fluid>
          <Navbar.Brand>myMusicMovies</Navbar.Brand>
          <Nav>
            <Nav.Link onClick={handleRegistration}>Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />

      <Container>

        <Row>

          <Col className='login-view__side-col'></Col>

          <Col className='login-view__main-col' lg={6}>

            <Card bg='dark'>
              <Card.Body>
                <Card.Title>Login</Card.Title>
                {/* <br /> */}
                <Form>
                  <Form.Group controlId='formUsername'>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type='text' value={username} onChange={e => setUsername(e.target.value)} />
                    {usernameErr && <p>{usernameErr}</p>}
                  </Form.Group>

                  <Form.Group controlId='formPassword'>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    {passwordErr && <p>{passwordErr}</p>}
                  </Form.Group>

                  <br />

                  <Button variant='info' type='submit' onClick={handleSubmit}>Login</Button>

                </Form >

                <br />
                <br />

                <Card.Title>Create account</Card.Title>
                <Card.Text>Register now to create your free account</Card.Text>
                <Button variant="info" type="button" onClick={handleRegistration}>Register
                </Button>

              </Card.Body>

            </Card>

          </Col>

          <Col className='login-view__side-col'></Col>

        </Row>

      </Container>

    </div>
  );
}

// propTypes
LoginView.propTypes = {
  Username: PropTypes.string,
  Password: PropTypes.string,
  onClick: PropTypes.func
};