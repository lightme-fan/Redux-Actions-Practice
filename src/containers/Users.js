import {connect} from 'react-redux';
import { users } from '../actions';
import Users from '../components/Users';

function mapStateToProps(state){
    return {
        users: state.users
    }
}

const mapDispatchToProps = {
    sortOn: users,
    
}

export default connect(mapStateToProps, null)(Users)