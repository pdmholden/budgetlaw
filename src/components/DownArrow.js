import React from 'react';

class DownArrow extends React.Component {
  render() {
    var styles = {
      arrow: {
        width: 344,
      },
      line: {
        // marginLeft: 171,
        width: 2,
        background: '#52B880',
        height: 148,
      },
    }

    if (this.props.direction == "left") {
      styles.line.transform = "rotate(220deg)";
      styles.line.marginTop = -15;
    } else if (this.props.direction == "right") {
      styles.line.transform = "rotate(140deg)";
      styles.line.marginTop = -15;
    }

    return (
      <div style={styles.arrow}>
        <div style={styles.line}></div>
      </div>
    );
  }
}

export default DownArrow;
