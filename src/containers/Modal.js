import { connect } from 'react-redux';
import { hideModal } from '../actions';
import ModalTemplate from '../components/Modal';

//map a prop called text to the state specialText
function mapStateToProps(globalState){
  return {
    displayModal: globalState.displayModal, 
  }
}

const mapDispatchToProps = {
  toggleModal: hideModal
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalTemplate);