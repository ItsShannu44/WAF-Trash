import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
class Cart extends Component {
 constructor(props) {
 super(props);
 this.state = {
 items: []
 };
 }
 componentDidMount() {
 setTimeout(() => {
 const productData = [
 { id: 1, name: 'Laptop', price: 50000, quantity: 1 },
 { id: 2, name: 'Mobile', price: 20000, quantity: 1 },
 { id: 3, name: 'Headphones', price: 2000, quantity: 1 }
 ];
 this.setState({ items: productData });
 }, 1000);
 }
 increaseQuantity = (id) => {
 const updatedItems = this.state.items.map((item) => {
 if (item.id === id) {
 return { ...item, quantity: item.quantity + 1 };
 }
 return item;
 });
 this.setState({ items: updatedItems });
 };
 decreaseQuantity = (id) => {
 const updatedItems = this.state.items.map((item) => {
 if (item.id === id && item.quantity > 1) {
 return { ...item, quantity: item.quantity - 1 };
 }
 return item;
 });
 this.setState({ items: updatedItems });
 };
 render() {
 const totalPrice = this.state.items.reduce(
 (total, item) => total + item.price * item.quantity,
 0
 );
 return (
 <div>
 <h1>Shopping Cart Manager</h1>
 <table border="1" cellPadding="10">
 <thead>
 <tr>
 <th>Product</th>
 <th>Price</th>
 <th>Quantity</th>
 <th>Actions</th>
 </tr>
 </thead>
 <tbody>
 {this.state.items.map((item) => (
 <tr key={item.id}>
 <td>{item.name}</td>
 <td>{item.price}</td>
 <td>{item.quantity}</td>
 <td>
 <button
 onClick={() => this.increaseQuantity(item.id)}
 >
 Add
 </button>
 <button
 onClick={() => this.decreaseQuantity(item.id)}
 >
 Remove
 </button>
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 <h2>Total Price: ■ {totalPrice}</h2>
 </div>
 );
 }
}
class App extends Component {
 render() {
 return <Cart />;
 }
}

export default App;