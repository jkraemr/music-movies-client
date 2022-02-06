import React, { useState } from 'react';

export function LoginView(props) {
  const [username, SetUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    /* send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
    props.onLoggedIn(username);
  };

  return (
    <form>
      <label>
        Username:
        <input type="text" value={username} onChange={e => SetUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={username} onChange={e => setPasswqord(e.target.value)} />
      </label>
      <button type="submit" onClick={handleSubmit} Submit></button>
    </form>
  );
}

// import React from 'react';

// export class LoginView extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       username: '',
//       password: ''
//     };

//     this.onUserNameChange = this.onUserNameChange.bind(this);
//     this.onPasswordChange = this.onPasswordChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   onUserNameChange(event) {
//     this.setState({
//       username.event.target.value
//     });
//   }

//   onPasswordChange(event) {
//     this.setState({
//       password: event.target.value
//     });
//   }

//   handleSubmit() {
//     const { username, password } = this.state;
//     console.log(username, password);
//     // send a request to the server for authentication
//     // then call this.props.onLoggedIn(username)
//     // this.props.onLoggedIn(username);
//   }

//   render() {
//     return (
//       <form>
//         <label>
//           Username:
//           <input type="text" value={this.state.username} onChange={this.onUserNameChange} />
//         </label>
//         <label>
//           Password:
//           <input type="password" value={this.state.password} onChange={this.onPasswordChange} />
//         </label>
//         <button type="button" onClick={this.handleSubmit}>Submit</button>
//       </form>
//     );
//   }
// }