import { ADD_MODEL } from './actions'

const reducer = (state = [], action = {}) => {
  switch(action.type) {
    case ADD_MODEL:
      return action.payload
    default: 
      return state
  }
}

export default reducer