import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
class CelsiusInput extends Component {
 render() {
 return (
 <div>
 <h3>Celsius</h3>
 <input
 type="number"
 value={this.props.celsius}
 onChange={this.props.handleCelsius}
 />
 </div>
 );
 }
}
class FahrenheitInput extends Component {
 render() {
 return (
 <div>
 <h3>Fahrenheit</h3>
 <input
 type="number"
 value={this.props.fahrenheit}
 onChange={this.props.handleFahrenheit}
 />
 </div>
 );
 }
}
class App extends Component {
 constructor(props) {
 super(props);
 this.state = {
 celsius: '',
 fahrenheit: ''
 };
 }
 updateCelsius = (e) => {
 const c = e.target.value;
 const f = (c * 9) / 5 + 32;
 this.setState({
 celsius: c,
 fahrenheit: f
 });
 };
 updateFahrenheit = (e) => {
 const f = e.target.value;
 const c = ((f - 32) * 5) / 9;
 this.setState({
 fahrenheit: f,
 celsius: c
 });
 };
 render() {
 return (
 <div>
 <h1>Temperature Converter</h1>
 <CelsiusInput
 celsius={this.state.celsius}
 handleCelsius={this.updateCelsius}
 />
 <br />
 <FahrenheitInput
 fahrenheit={this.state.fahrenheit}
 handleFahrenheit={this.updateFahrenheit}
 />
 </div>
 );
 }
}
export default App;