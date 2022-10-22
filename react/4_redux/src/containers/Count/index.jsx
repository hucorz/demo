import React, { Component } from "react";

import { incrementAction, decrementAction, incrementActionAsync } from "../../redux/actions/count";

import { connect } from "react-redux";

class Count extends Component {
  constructor(props) {
    super(props);
    this.selectBox = React.createRef();
  }

  increment = () => {
    const num = this.selectBox.current.value;
    this.props.incrementAction(num*1)
  };

  decrement = () => {
    const num = this.selectBox.current.value;
    this.props.decrementAction(num*1)
  }

  incrementIfOdd = () => {
    const num = this.selectBox.current.value;
    if (this.props.count % 2 !== 0) {
      this.props.incrementAction(num*1)
    }
  }

  incrementAsync = () => {
    const num = this.selectBox.current.value;
    this.props.incrementActionAsync(num*1, 500)
  }

  render() {
    return (
      <div>
        <h2>Here is Count Component, Person Component's personLength is {this.props.personCount}</h2>
        <h4>total sum: {this.props.count}</h4>
        <select ref={this.selectBox}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>+ if odd</button>
        <button onClick={this.incrementAsync}>+ sync</button>
      </div>
    );
  }
}

export default connect(
  state => ({
    personCount: state.persons.length,
    count: state.count,
  }),
  { incrementAction, decrementAction, incrementActionAsync }
)(Count);
