import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
class SearchBar extends Component {
 render() {
 return (
 <div>
 <input
 type="text"
 placeholder="Search Employee"
 value={this.props.searchText}
 onChange={this.props.handleChange}
 />
 </div>
 );
 }
}
class EmployeeDirectory extends Component {
 constructor(props) {
 super(props);
 this.state = {
 searchText: '',
 employees: [
 'Rahul',
 'Sneha',
 'Kiran',
 'Ananya',
 'Rohit'
 ]
 };
 }
 handleSearch = (e) => {
 this.setState({ searchText: e.target.value });
 };
 render() {
 const filteredEmployees = this.state.employees.filter((employee) =>
 employee
 .toLowerCase()
 .includes(this.state.searchText.toLowerCase())
 );
 return (
 <div>
 <h1>Employee Directory Filter</h1>
 <SearchBar
 searchText={this.state.searchText}
 handleChange={this.handleSearch}
 />
 <ul>
 {filteredEmployees.map((employee, index) => (
 <li key={index}>{employee}</li>
 ))}
 </ul>
 </div>
 );
 }
}
class App extends Component {
 render() {
 return <EmployeeDirectory />;
 }
}
export default App;