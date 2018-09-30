import Grid from '@material-ui/core/Grid';
import React, { Component } from 'react';

class HomeContent extends Component {
  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={6}>
          Start from here:
          Ask questions now
          Administrative lawyers need to juggle multiple cases, each with their own mountain of paperwork and red tape. Clio’s cloud-based practice management software.
        </Grid>
        <Grid item xs={6}>
          IMAGE HERE
        </Grid>
      </Grid>
    );
  }
}

export default HomeContent;
