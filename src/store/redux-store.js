import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'INCREMENT') {
    return {
      counter: state.counter + 1
    };
  } else if (action.type === 'DECREMENT') {
    return {
      counter: state.counter - 1
    };
  } else if (action.type === 'INCREASEBY') {
    return {
      counter: state.counter + action.value
    };
  } else {
    return state;
  }
};

const store = createStore(counterReducer);

export default store;
