import React from 'react';

const styles = {
  arrow: {
    width: 344,
  },
  line: {
    marginLeft: 171,
    width: 2,
    background: '#089CFF',
    height: 148,
    float: 'center',
  },
}

class DownArrow extends React.Component {
  render() {
    return (
      <div style={styles.arrow}>
        <div style={styles.line}></div>
      </div>
    );
  }
}

export default DownArrow;
