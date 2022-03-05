import { createStore } from 'redux';

const initialState = {
  counter: 0,
  showCounter: true
};
const counterReducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    };
  } else if (action.type === 'DECREMENT') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
    };
  } else if (action.type === 'INCREASEBY') {
    return {
      counter: state.counter + action.value,
      showCounter: state.showCounter
    };
  } else if (action.type === 'TOGGLE') {
    return {
      counter: state.counter,
      showCounter: !state.showCounter
    };
  } else {
    return state;
  }
};

const store = createStore(counterReducer);

export default store;
