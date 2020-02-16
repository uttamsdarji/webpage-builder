import AddComponent from './AddComponent';
import {createComponent, checkUniqueId} from './AddComponentModule';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    components: state.components,
    position: state.workingArea.position
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createComponent: (component,id,name) => dispatch(createComponent(component,id,name)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComponent)