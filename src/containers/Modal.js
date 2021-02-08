import { connect } from 'react-redux';
import ShowModal from '../components/ShowModal';

//map a prop called text to the state specialText
function mapStateToProps(globalState){
  return {
    toggleModal: globalState.displayModal
  }
}

export default connect(null, null)(ShowModal);