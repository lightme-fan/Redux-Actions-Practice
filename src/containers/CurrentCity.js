import { connect } from 'react-redux';
import CurrentCity from "../components/CurrentCity";
import { setCurrentCity } from "../actions";

//map a prop called text to the state specialText
function mapStateToProps(globalState){
  return {
    text: globalState.currentCity
  }
}

export default connect(mapStateToProps, null)(CurrentCity);