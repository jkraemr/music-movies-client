import React from 'react';
import ReactDOM from 'react-dom';

import { MainView } from './components/main-view/main-view';

import Container from 'react-bootstrap/Container';
import './index.scss';

class MyMusicMoviesApplication extends React.Component {
  render() {
    return (
      <Container fluid="sm" className="bg-dark text-white">
        <MainView className="bg-dark text-white" />
      </Container>
    );
  }
}

// Finds the root of the app
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render the app in the root DOM element
ReactDOM.render(React.createElement(MyMusicMoviesApplication), container);