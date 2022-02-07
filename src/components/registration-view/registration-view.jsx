import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './registration-view.scss';

export function RegistrationView(props) {
  const [username, SetUsername] = useState('');
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

  return (

    <div className='registration-view'>

      <h1>Welcome to myMusicMovies</h1>

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
      </form>
    </div>

  );
}

// propTypes
RegistrationView.propTypes = {
  Username: PropTypes.string,
  Password: PropTypes.string,
  PasswordRep: PropTypes.string,
  Email: PropTypes.string,
  Birthday: PropTypes.instanceOf(Date),
  onCLick: PropTypes.func
};