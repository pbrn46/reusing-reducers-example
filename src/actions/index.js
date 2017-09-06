export const ADD_COUNTER = "ADD_COUNTER"
export const addCounter = (defaults={}) => ({
  type: ADD_COUNTER,
  defaults,
})

// The following actions are for specific counters. By passing a counter itself
// as a reference, we can use it to specify which counter to operate on.

export const INCREMENT_VALUE = "INCREMENT_VALUE"
export const incrementValue = (counter) => ({
  type: INCREMENT_VALUE,
  counter,
})

export const DECREMENT_VALUE = "DECREMENT_VALUE"
export const decrementValue = (counter) => ({
  type: DECREMENT_VALUE,
  counter,
})

export const SET_VALUE = "SET_VALUE"
export const setValue = (counter, value) => ({
  type: SET_VALUE,
  counter,
  value,
})
