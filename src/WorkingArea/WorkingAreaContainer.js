import WorkingArea from './WorkingArea';
import {setPosition} from './WorkingAreaModule';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    components: state.components,
    background: state.background
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPosition: (x,y) => dispatch(setPosition(x,y))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkingArea)