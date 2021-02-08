import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'

import { increase, decrease } from '../actions/index'

function CounterButton({ increase, decrease }) {
  return (
      <div>
        <Button
          variant="contained"
          size="small"
          onClick={() => {
            if(increase) {
              return increase()
            }
          }}
        >Increase Counter By One</Button>
        <Button
          variant="contained"
          size="small"
          onClick={() => {
            if(decrease) {
              return decrease()
            }
          }}
        >Decrease Counter By One</Button>
      </div>
  );
}

function mapStateToProps(globalState) {
  return {
    increase: globalState.currentCount,
    decrease: globalState.currentCount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch({ type: 'INCREASE_COUNT' }),
    decrease: () => dispatch({ type: 'DECREASE_COUNT' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterButton);