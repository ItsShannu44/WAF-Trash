import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

class Child extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.sendData}>
          Send Data to Parent
        </button>
      </div>
    );
  }
}

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'No message received'
    };
  }

  receiveData = () => {
    this.setState({
      message: 'Hello from Child Component'
    });
  };

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <Child sendData={this.receiveData} />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Lifting Up State Example</h1>
        <Parent />
      </div>
    );
  }
}

export default App;