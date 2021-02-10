import {connect} from 'react-redux';
import { getUserFromApi, users } from '../actions';
import Users from '../components/Users';

function mapStateToProps(state){
    return {
        users: state.users,
        sortOn: state.currentUserSort,
        firstNameFilter: state.searchText
    }
}
const mapDispatchToProps = {
    getUsers: getUserFromApi
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)