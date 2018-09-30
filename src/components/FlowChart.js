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
            title="Type of application to complete"
            body="You’ve indicated that you’re not sure if you can reach an amicable separation agreement with your partner. If the wrong type of application is selected, you may spend unnecessary costs in the process. The Application types listed to the right can help you decide this."
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
            title="Joint application"
            body="This is a simple uncontested divorce if you and your spouse want to apply for a divorce together."
          />
        </Grid>
        <Grid item xs={6} align="center">
          <SimpleCard
            title="Solo application"
            body="This is a simple contested divorce if there are issues that may be disputed between the parties or one spouse does not want to be involved in the application process."
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
            title="Gather documents"
            body="You'll need the following documents to proceed: marriage certificate, separation agreement or order"
          />
        </Grid>
        <Grid item xs={6} align="center">
          <SimpleCard
            title="Gather documents"
            body="You'll need the following documents to proceed: marriage certificate, separation agreement or order"
          />
        </Grid>

        { /* Row 6 */}
        <Grid item xs={6} align="center">
          <DownArrow />
        </Grid>
        <Grid item xs={6} align="center">
          <DownArrow />
        </Grid>

        { /* Row 7 */}
        <Grid item xs={6} align="center">
          <SimpleCard
            title="Fill out notice of joint family claim"
          />
        </Grid>
        <Grid item xs={6} align="center">
          <SimpleCard
            title="Prepare, file and serve notice"
          />
        </Grid>

        { /* Row 8 */}
        <Grid item xs={6} align="center">
          <DownArrow />
        </Grid>
        <Grid item xs={6} align="center">
          <DownArrow />
        </Grid>

        { /* Row 9 */}
        <Grid item xs={6} align="center">
          <SimpleCard
            title="Complete a registration of divorce"
            body="The Notice of Joint Family Claim has five sections.All the issues between you and your spouse must have been resolved under an agreement or court order."
          />
        </Grid>
        <Grid item xs={6} align="center">
          <SimpleCard
            title="Prepare affidavits"
          />
        </Grid>

        { /* Row 8 */}
        <Grid item xs={6} align="center">
          <DownArrow />
        </Grid>
        <Grid item xs={6} align="center">
          <DownArrow />
        </Grid>

        { /* Row 9 */}
        <Grid item xs={6} align="center">
          <SimpleCard
            title="Prepaere affidavits"
          />
        </Grid>
        <Grid item xs={6} align="center">
          <SimpleCard
            title="Swear or affirm affidavits"
            body="There are rules around the timing for swearing/affirming the Affidavit."
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
