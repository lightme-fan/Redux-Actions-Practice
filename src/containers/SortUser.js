import { connect } from 'react-redux';
import { sortUser } from '../actions';
import SortUsers from '../components/SortUsers';

const mapDispatchToProps = {
    set: sortUser
}

export default connect(null, mapDispatchToProps)(SortUsers)