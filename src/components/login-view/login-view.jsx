import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

import './login-view.scss';

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    // send auth request to server
    // then call props.onLoggedIn(username)
    props.onLoggedIn(username);
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
            <Nav.Link>Login</Nav.Link>
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
                <Card.Title>Welcome back!</Card.Title>
                {/* <br /> */}
                <Form>
                  <Form.Group controlId='formUsername'>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type='text' onChange={e => setUsername(e.target.value)} />
                  </Form.Group>

                  <Form.Group controlId='formPassword'>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type='password' onChange={e => setPassword(e.target.value)} />
                  </Form.Group>
                  <br />
                  <Button variant='info' type='submit' onClick={handleSubmit}>Login</Button>
                </Form >
                <br />
                <br />
                <Card.Title>Create account</Card.Title>
                <Card.Text>Register now to create your free account!</Card.Text>
                <Button variant="info" type="button" onClick={handleRegistration}>Register
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className='login-view__side-col'></Col>
        </Row>
      </Container>
      {/* 

      <Row>
        <Col className='login-view__side-col'></Col>

        <Col className='login-view__main-col' sm={6} md={4} lg={3} xl={2}>
          <Form>
            <Form.Group controlId='formUsername'>
              <Form.Label>Username:</Form.Label>
              <Form.Control type='text' onChange={e => setUsername(e.target.value)} />
            </Form.Group>

            <Form.Group controlId='formPassword'>
              <Form.Label>Password:</Form.Label>
              <Form.Control type='password' onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <br />
            <Button variant='info' type='submit' onClick={handleSubmit}>Submit</Button>
          </Form >
        </Col>

        <Col className='login-view__side-col'></Col>
      </Row> */}


    </div>



  );
}

// propTypes
LoginView.propTypes = {
  Username: PropTypes.string,
  Password: PropTypes.string,
  onClick: PropTypes.func
};