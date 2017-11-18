import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import BlurIcon from './bluricon';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const AppBarExampleIcon = () => (
  <AppBar
    title="Tic-Tac-Toe"
    iconElementLeft={<IconButton><BlurIcon /></IconButton>}
  />
);

export default AppBarExampleIcon;
