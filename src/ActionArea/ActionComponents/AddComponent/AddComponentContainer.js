import AddComponent from './AddComponent';
import {createComponent} from './AddComponentModule';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    totalComponents: state.components ? state.components.length : 0,
    position: state.workingArea.position
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createComponent: (component,id,name) => dispatch(createComponent(component,id,name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComponent)