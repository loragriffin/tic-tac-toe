import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Game from './game';
import AppBar from './AppBar';

import './app.css';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <AppBar />
        <Game />
      </MuiThemeProvider>
    );
  }
}

export default App;
