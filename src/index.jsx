import React from 'react';
import ReactDOM from 'react-dom';

// Import MainView root component / no file extension needed when importing from js or jsx files in React
import { MainView } from './components/main-view/main-view';

// Import statement to indicate that ./index.scss needs to be bundled
import './index.scss';

// Main component (will eventually use all the others)
class MyMusicMoviesApplication extends React.Component {
  render() {
    return (
      // Use MainView component via short format (<MainView />) opposed to <MainView></MainView>
      <MainView />
    );
  }
}

// Finds the root of the app
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render the app in the root DOM element
ReactDOM.render(React.createElement(MyMusicMoviesApplication), container);