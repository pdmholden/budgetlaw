import React from 'react';
import SimpleCard from './SimpleCard';
import DownArrow from './DownArrow';

class FlowChart extends React.Component {
  render() {
    return (
      <div>
        <SimpleCard
          title="Bad title"
          body="Bad body text"
        />
        <DownArrow direction="left" />
        <SimpleCard
          title="Bad title"
          body="Bad body text"
        />
        <DownArrow direction="right" />
        <DownArrow direction="right" />
        <DownArrow direction="right" />
        <DownArrow direction="right" />
        <DownArrow direction="right" />
        <SimpleCard
          title="Good title"
          body="Bad body text"
        />
      </div>
    );
  }
}

export default FlowChart;
