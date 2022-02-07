import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './login-view.scss';

export function LoginView(props) {
  const [username, SetUsername] = useState('');
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
      <h1>Welcome to myMusicMovies</h1>
      <h2>Login</h2>

      <form className="login-form">
        <label>
          Username:
          <input type="text" value={username} onChange={e => SetUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <button type="submit" onClick={handleSubmit} Submit>Login</button>
      </form>
      <h2>No account yet?</h2>
      <button type="button" onClick={handleRegistration}>Register</button>
    </div>
  );
}

// propTypes
LoginView.propTypes = {
  Username: PropTypes.string,
  Password: PropTypes.string,
  onClick: PropTypes.func
};