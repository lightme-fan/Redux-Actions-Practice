import { connect } from 'react-redux';
import { changeThermostat } from '../actions';
import ChangeTemperature from '../components/ChangeTemperature';

//map a prop called text to the state specialText
const mapDispatchToProps = {
    set: changeThermostat
}

export default connect(null, mapDispatchToProps)(ChangeTemperature);