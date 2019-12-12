import { combineReducers } from 'redux';
import addComponentReducer from './ActionArea/ActionComponents/AddComponent/AddComponentModule';
import addBackgroundReducer from './ActionArea/ActionComponents/AddBackground/AddBackgroundModule';
import workingAreaReducer from './WorkingArea/WorkingAreaModule';

export default combineReducers({
  components: addComponentReducer,
  background: addBackgroundReducer,
  workingArea: workingAreaReducer
})
