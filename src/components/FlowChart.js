import React from 'react';
import SimpleCard from './SimpleCard';
import DownArrow from './DownArrow';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    color: "#FFFFFF",
  },
});

function FlowChart(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container>

        { /* Row 1 */}
        <Grid item xs={12} align="center">
          <SimpleCard
            title="Good title"
            body="Bad body text"
          />
        </Grid>

        { /* Row 2 */}
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={2}>
          <DownArrow direction="left" />
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={2}>
          <DownArrow direction="right" />
        </Grid>

        { /* Row 3 */}
        <Grid item xs={6} align="center" marginTop={-50}>
          <SimpleCard
            title="Bad title"
            body="Bad body text"
          />
        </Grid>
        <Grid item xs={6} align="center">
          <SimpleCard
            title="Bad title"
            body="Bad body text"
          />
        </Grid>

        { /* Row 4 */}
        <Grid item xs={6} align="center">
          <DownArrow />
        </Grid>
        <Grid item xs={6} align="center">
          <DownArrow />
        </Grid>

        { /* Row 5 */}
        <Grid item xs={6} align="center">
          <SimpleCard
            title="Bad title"
            body="Bad body text"
          />
        </Grid>
        <Grid item xs={6} align="center">
          <SimpleCard
            title="Bad title"
            body="Bad body text"
          />
        </Grid>

        { /* Row 6 */}
        <Grid item xs={6} align="center">
          <DownArrow />
        </Grid>
        <Grid item xs={6} align="center">
          <DownArrow />
        </Grid>

        { /* Row 5 */}
        <Grid item xs={6} align="center">
          <SimpleCard
            title="Bad title"
            body="Bad body text"
          />
        </Grid>
        <Grid item xs={6} align="center">
          <SimpleCard
            title="Bad title"
            body="Bad body text"
          />
        </Grid>


      </Grid>
    </div>
  );
}

FlowChart.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FlowChart);
