import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Game from './game';
import SimpleAppBar from './AppBar';

import './app.css';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <SimpleAppBar />
        <Game />
      </MuiThemeProvider>
    );
  }
}

export default App;
