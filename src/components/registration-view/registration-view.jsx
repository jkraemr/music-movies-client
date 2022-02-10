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
// import { CardGroup } from 'react-bootstrap';

import './registration-view.scss';

export function RegistrationView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordrep, setPasswordRep] = useState("");
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, passwordrep, email, birthday);
    // send auth request to server
    // then call props.onLoggedIn(username)
    props.onLoggedIn(username);
  };

  const handleRegistration = () => {
    props.onRegister(true);
  };

  return (

    <div className='registration-view'>

      <Navbar bg="info" variant="dark">
        <Container fluid>
          <Navbar.Brand>myMusicMovies</Navbar.Brand>
          <Nav>
            <Nav.Link>Register</Nav.Link>
            <Nav.Link onClick={handleSubmit}>Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />

      <Container>

        <Row>

          <Col className='registration_side-col'></Col>

          <Col className='registration__main-col' lg={6}>

            <Card bg='dark'>
              <Card.Body>
                <Card.Title>Create your account</Card.Title>
                {/* <br /> */}
                <Form>
                  <Form.Group>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type='text' value={username} onChange={e => setUsername(e.target.value)} required />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type='password' value={password} onChange={e => setPassword(e.target.value)} minLength="4" placeholder="Please enter at least 4 characters" required />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Re-enter Password:</Form.Label>
                    <Form.Control type='password' value={passwordrep} onChange={e => setPasswordRep(e.target.value)} minLength="4" placeholder="Please enter at least 4 characters" required />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type='email' value={email} onChange={e => setEmail(e.target.value)} required />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Birthday:</Form.Label>
                    <Form.Control type='text' value={birthday} onChange={e => setBirthday(e.target.value)} />
                  </Form.Group>

                  <br />
                  <Button variant='info' type='submit' onClick={handleSubmit}>Register</Button>
                </Form >
              </Card.Body>
            </Card>
          </Col>
          <Col className='login-view__side-col'></Col>
        </Row>
      </Container>


      {/* <h1>Welcome to myMusicMovies</h1>

      <h2>Create your free account</h2>

      <form className="registration-form">

        <label className='registration-form__label'>
          Username:
        </label>
        <input className='registration-form__input' type="text" value={username} onChange={e => SetUsername(e.target.value)} />
        <label className='registration-form__label'>
          Password:
        </label>
        <input className='registration-form__input' type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <label className='registration-form__label'>
          Re-enter Password:
        </label>
        <input className='registration-form__input' type="password" value={passwordrep} onChange={e => setPasswordRep(e.target.value)} />
        <label className='registration-form__label'>
          Email:
        </label>
        <input className='registration-form__input' type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <label className='registration-form__label'>
          Password:
        </label>
        <input className='registration-form__input' type="date" value={birthday} onChange={e => setBirthday(e.target.value)} />
        <button type="submit" onClick={handleSubmit}>Create Account</button>
      </form> */}
    </div>

  );
}

// propTypes
RegistrationView.propTypes = {
  Username: PropTypes.string,
  Password: PropTypes.string,
  PasswordRep: PropTypes.string,
  Email: PropTypes.string,
  Birthday: PropTypes.string,
  onCLick: PropTypes.func
};