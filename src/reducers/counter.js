import * as actions from '../actions'

// Remember the state must return an object or an array so it may be compared.
// Therefore, we wrap the value as state={value: 0} rather than using state=0
function Counter(state, action) {
  // Default values go here
  state = {value: 0, ...state}
  switch (action.type) {
    case actions.INCREMENT_VALUE:
      // We spread the state (...state) here in case we add more properties to
      // this state in the future.
      return {...state, value: state.value + 1}
    case actions.DECREMENT_VALUE:
      return {...state, value: state.value - 1}
    case actions.SET_VALUE:
      return {...state, value: action.value}
    default:
      return state
  }
}
export default Counter
