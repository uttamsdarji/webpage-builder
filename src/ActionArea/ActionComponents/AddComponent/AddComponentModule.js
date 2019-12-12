const CREATE_COMPONENT = "CREATE_COMPONENT"

export const createComponent = (component,id,name) => ({
  type: CREATE_COMPONENT,
  component,
  id,
  name
})


const addComponent = (state=[],action) => {
  switch(action.type) {
    case CREATE_COMPONENT:
      let newState = [...state]
      let checkUnique = newState.filter((component) => component.id == action.id);
      if(checkUnique.length == 0) {
        if(newState && newState.length > 0) {
          newState.push({
            component: action.component,
            id: action.id,
            name: action.name
          })
        } else {
          newState = [{
            component: action.component,
            id: action.id,
            name: action.name
          }]
        }
      }
      return newState;
    default:
      return state;
  }
} 

export default addComponent
