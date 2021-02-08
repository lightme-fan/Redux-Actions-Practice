import React from 'react';
import { connect } from 'react-redux';

function Counter({ count }) {
  return (
      <div>
        Counter: {count !== undefined ? count : "null"}
      </div>
  );
}

const mapStateToProps = (globalState) => {
  return {count: globalState.currentCount}
}

export default connect(mapStateToProps)(Counter);