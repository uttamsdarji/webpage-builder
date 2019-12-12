import AddBackground from './AddBackground';
import {connect} from 'react-redux';
import {addBackground} from './AddBackgroundModule';

const mapDispatchToProps = (dispatch) => ({
  addBackground: (background) => dispatch(addBackground(background))
})


export default connect(null, mapDispatchToProps)(AddBackground)