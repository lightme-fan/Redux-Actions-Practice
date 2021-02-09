import { connect } from 'react-redux';

import { addUserButton, removeUserButton } from '../actions';
import UserButtons from '../components/UserButtons';

const mapDispatchToProps = {
    add: addUserButton, 
    remove: removeUserButton
}

export default connect(null, mapDispatchToProps)(UserButtons);