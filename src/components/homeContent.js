import Grid from '@material-ui/core/Grid';
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button/Button";

const ContentHeader = withStyles({
  root: {
    color: 'white',
    textAlign: 'left',
    fontSize: 64,
    fontFamily: 'SF Pro Display',
    padding: '0 20px',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Typography);

const ContentSubHeader = withStyles({
  root: {
    color: 'white',
    textAlign: 'left',
    fontSize: 34,
    fontFamily: 'SF Pro Display',
    padding: '0 20px',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Typography);

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

const StyledButton = withStyles({
  root: {
    color: 'white',
    fontSize: 16,
    height: 48,
    padding: '0 60px',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

class HomeContent extends Component {
  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={8}>
          <ContentHeader>Tell us about your situation </ContentHeader>
          <ContentSubHeader>
            <p>
              We understand that every situation is unique. After a quick chat we'll work to
              make a map of your case, designed specifically for you!
            </p>
          </ContentSubHeader>
          <ContentSubHeader>
            <MenuButton>Get Started for Free</MenuButton>
            <StyledButton>Need help to start</StyledButton>
          </ContentSubHeader>
        </Grid>

      </Grid>
    );
  }
}

export default HomeContent;
