import { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Counter.module.css';

class CounterClassComponent extends Component {
  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter Class Component</h1>
        <div className={classes.value}>{this.props.count}</div>
        <button onClick={this.incrementHandler.bind(this)}>Increment</button>
        <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        <button onClick={this.toggleCounterHandler.bind(this)}>
          Toggle Counter
        </button>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterClassComponent);
