import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
class MovieReview extends Component {
 constructor(props) {
 super(props);
 this.state = {
 movieName: '',
 review: '',
 reviews: []
 };
 this.handleMovie = this.handleMovie.bind(this);
 this.handleReview = this.handleReview.bind(this);
 this.handleSubmit = this.handleSubmit.bind(this);
 }
 handleMovie(e) {
 this.setState({ movieName: e.target.value });
 }
 handleReview(e) {
 this.setState({ review: e.target.value });
 }
 handleSubmit(e) {
 e.preventDefault();
 const newReview = {
 movie: this.state.movieName,
 review: this.state.review
 };
 this.setState({
 reviews: [...this.state.reviews, newReview],
 movieName: '',
 review: ''
 });
 }
 render() {
 return (
 <div>
 <h1>Movie Review Portal</h1>
 <form onSubmit={this.handleSubmit}>
 <input
 type="text"
 placeholder="Movie Name"
 value={this.state.movieName}
 onChange={this.handleMovie}
 />
 <br />
 <br />
 <textarea
 placeholder="Write Review"
 value={this.state.review}
 onChange={this.handleReview}
 ></textarea>
 <br />
 <br />
 <button type="submit">Submit Review</button>
 </form>
 <h2>Reviews</h2>
 <ul>
 {this.state.reviews.map((item, index) => (
 <li key={index}>
 <b>{item.movie}</b> : {item.review}
 </li>
 ))}
 </ul>
 </div>
 );
 }
}
class App extends Component {
 render() {
 return <MovieReview />;
 }
}
export default App;