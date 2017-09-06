import * as actions from '../actions'

import CounterReducer from './counter'
function Counters(state=[], action) {
  // Bubble actions through each counter in the array
  state = state.map(counter => {
    // An instance of counter is passed as reference for comparison. If true,
    // we apply reduce further.
    if (action.counter === counter)
      return CounterReducer(counter, action)
    else
      return counter
  })
  switch (action.type) {
    case actions.ADD_COUNTER:
      var counter = CounterReducer({
        // If we have default values to use, we add it here.
        ...action.defaults,
      }, action)
      return [...state, counter]
    default:
      return state
  }
}

export default Counters
