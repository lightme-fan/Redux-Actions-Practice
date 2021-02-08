import { connect } from 'react-redux';
import { showModal } from '../actions';
import ShowModal from '../components/ShowModal';

const mapDispatchToProps = {
    set: showModal
}

export default connect(null, mapDispatchToProps)(ShowModal);