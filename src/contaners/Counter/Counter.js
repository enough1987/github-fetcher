import React, { Component } from 'react';

export class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  increment = () => {
    this.setState((state) => {
      return {
        counter: state.counter + 1
      };
    })
  }

  decrement = () => {
    this.setState((state) => {
      if(!state.counter) {
        return {};
      }
      return {
        counter: state.counter - 1
      };
    })
  }

  render() {
    return ( 
        <div className="Counter" > 
          <h1> current counter is { this.state.counter } </h1>
          <button data-test="btn-increment" 
            onClick={ this.increment }>
            increment
          </button>  
          <button data-test="btn-decrement" 
            onClick={ this.decrement }>
            decrement
          </button>  
        </div>
    );
  }
}

Counter.path = "counter";
Counter.navigationOptions = () => ({
  title: "Counter",
  linkName: "Counter"
});

export default Counter;
