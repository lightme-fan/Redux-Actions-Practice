import { connect } from 'react-redux';
import ImagePreview from '../components/ImagePreview';

//map a prop called text to the state specialText
function mapStateToProps(globalState){
  return {
    imageUrl: globalState.imageUrl,
    scale: globalState.imageScale
  }
}

export default connect(mapStateToProps, null)(ImagePreview);
