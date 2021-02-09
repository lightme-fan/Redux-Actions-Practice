import { connect } from 'react-redux';
import { addImageUrl } from '../actions';
import ImageUrlTextBox from '../components/ImageUrlTextBox';

const mapDispatchToProps = {
    set: addImageUrl
}

export default connect(null, mapDispatchToProps)(ImageUrlTextBox);