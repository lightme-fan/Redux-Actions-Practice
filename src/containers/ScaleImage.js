import { connect } from 'react-redux';

import { imageScale } from '../actions';
import ScaleImage from '../components/ScaleImage';

const mapDispatchToProps = {
    set:imageScale
}

export default connect(null, mapDispatchToProps)(ScaleImage);