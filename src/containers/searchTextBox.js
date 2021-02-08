import { connect } from 'react-redux';
import { searchText } from '../actions';
import SearchTextBox from "../components/SearchTextBox";

//map the "setSpecialText" action function to a prop function called "set"
function mapStateToProps(globalState){
    return {
      set: globalState.searchText
    }
}

const mapDispatchToProps = {
    set: searchText 
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchTextBox);
