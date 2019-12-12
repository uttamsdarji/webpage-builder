const ADD_BACKGROUND = "ADD_BACKGROUND";

export const addBackground = (background) => ({
  type: ADD_BACKGROUND,
  background
})

const addBackgroundReducer = (state={},action) => {
  switch(action.type) {
    case ADD_BACKGROUND:
      return {...state,...action.background}
    default: 
      return state
  }
}

export default addBackgroundReducer;