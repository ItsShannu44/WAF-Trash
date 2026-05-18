import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

class Addition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: '',
      result: 0
    };
  }

  handleChange1 = (e) => {
    this.setState({ num1: e.target.value });
  };

  handleChange2 = (e) => {
    this.setState({ num2: e.target.value });
  };

  addNumbers = () => {
    const sum = parseInt(this.state.num1) + parseInt(this.state.num2);

    this.setState({ result: sum });
  };

  render() {
    return (
      <div>
        <input
          type="number"
          placeholder="Enter first number"
          onChange={this.handleChange1}
        />

        <input
          type="number"
          placeholder="Enter second number"
          onChange={this.handleChange2}
        />

        <button onClick={this.addNumbers}>Add</button>

        <h2>Result : {this.state.result}</h2>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Event Handling Example</h1>
        <Addition />
      </div>
    );
  }
}

export default App;