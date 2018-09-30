import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const StyledButton = withStyles({
  root: {
    color: 'white',
    height: 48,
    padding: '0 20px',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

class Menu extends Component {
  render() {
    return (
      <div className="App-menu">
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <StyledButton>About Us</StyledButton>
            <StyledButton>Budget Tool</StyledButton>
            <StyledButton>BC Family Law</StyledButton>
            <StyledButton>Contact</StyledButton>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Menu;
