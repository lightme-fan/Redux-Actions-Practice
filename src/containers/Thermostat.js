import { connect } from 'react-redux';
import Thermostat from '../components/Thermostat';

//map a prop called text to the state specialText
function mapStateToProps(globalState){
  return {
    temp: globalState.currentTemp
  }
}

export default connect(mapStateToProps, null)(Thermostat);