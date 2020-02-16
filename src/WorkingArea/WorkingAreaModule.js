const SET_POSITION = "SET_POSITION"

export const setPosition = (x,y) => ({
  type: SET_POSITION,
  position: {x,y}
})

export const startPositionTracking = () => {
  
}

const initialState = {
  position: {}
}

const workingAreaReducer = (state=initialState,action) => {
  switch(action.type) {
    case SET_POSITION:
      return {
        ...state,
        position: action.position
      }
    default:
      return state;
  }
}

export default workingAreaReducer;