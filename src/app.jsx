import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Game from './game';

import './game.css';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Game/>
      </MuiThemeProvider>
    );
  }
}

export default App;
