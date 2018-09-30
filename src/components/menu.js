import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import '../App.css';

const StyledButton = withStyles({
  root: {
    color: 'white',
    fontSize: 16,
    height: 48,
    padding: '0 20px',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const MenuButton = withStyles({
  root: {
    color: 'white',
    fontSize: 16,
    height: 48,
    padding: '0 20px',
    backgroundColor: '#52B880',
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
          <Grid item xs={2}>
            <StyledButton>Flowchart</StyledButton>
          </Grid>
          <Grid item xs={2}>
            <StyledButton>Budget Tool</StyledButton>
          </Grid>
          <Grid item xs={2}>
            <StyledButton>BC Law</StyledButton>
          </Grid>
          <Grid item xs={2}>
            <StyledButton>Contact Us</StyledButton>
          </Grid>
          <Grid item xs={3}>
            <MenuButton>Get Started for Free</MenuButton>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Menu;
