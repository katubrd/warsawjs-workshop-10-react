import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  };

  incrementCount = () => {
    this.setState({
      count: ++this.state.count
    });
  }

  decrementCount = () => {
    this.setState({
      count: --this.state.count
    });
  }

  render() {
    const {count} = this.state;

    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>click</button>
        <button onClick={this.decrementCount}>click</button>
        <p>hey</p>
      </div>
    )
  }
}

export default Counter;
