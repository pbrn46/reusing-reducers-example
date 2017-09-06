import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'

import countersReducer from './reducers/counters'
import * as actions from './actions'

var store = new createStore(
  combineReducers({
    counters: countersReducer,
  })
)

const mapStateToProps = (store) => ({
  counters: store.counters,
})

const mapDispatchToProps = ({
  addCounter: actions.addCounter,
  incrementValue: actions.incrementValue,
  decrementValue: actions.decrementValue,
  setValue: actions.setValue,
})

class CounterView extends React.Component {
  handleChange(e, counter) {
    var value = parseInt(e.target.value, 10)
    if (isNaN(value)) value = 0
    this.props.setValue(
      counter,
      value
    )
  }
  renderCounters() {
    return this.props.counters.map((counter, i) => (
      <div key={i} style={{border: "1px solid black", float: "left"}}>
        <h5>Counter</h5>
        <button type="button"
          onClick={e => this.props.decrementValue(counter)}>
          -</button>
        <button type="button"
          onClick={e => this.props.incrementValue(counter)}>
          +</button>
        Value:
        <input type="text" size="3"
          value={counter.value}
          onChange={e => this.handleChange(e, counter)}
        />
      </div>
    ))
  }
  render() {
    return (
      <div>
        <style type="text/css">{`* {margin: 2px; padding: 5px}`}</style>
        <div>
          <button type="button"
            onClick={(e) => this.props.addCounter()}>
            Add Counter</button>
          <button type="button"
            onClick={(e) => this.props.addCounter({value: 25})}>
            Add Counter starting with 25</button>
        </div>
        <div>
          {this.renderCounters()}
        </div>
      </div>
    )
  }
}

const CounterViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterView)


ReactDOM.render(
  <Provider store={store}>
    <CounterViewContainer />
  </Provider>,
  document.getElementById('root'))
