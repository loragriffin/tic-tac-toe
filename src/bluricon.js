import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {lightBlue50} from 'material-ui/styles/colors';

const iconStyles = {
  marginRight: 24,
};

const BlurIcon = () => (
  <div>
    <FontIcon className="material-icons" style={iconStyles} color={lightBlue50}>
        blur_on
    </FontIcon>
  </div>
);

export default BlurIcon;
