import React from 'react';
import { Container } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { MainView } from './components/main-view/main-view';
import './index.scss';

class MyMusicMoviesApplication extends React.Component {
  render() {
    return (
      <Container>
        <MainView />
      </Container>
    );
  }
}

// Finds the root of the app
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render the app in the root DOM element
ReactDOM.render(React.createElement(MyMusicMoviesApplication), container);