import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Greeting from './Greeting';
// import App from './Appcomposing';
// import BookApp from './Appprops';
// import App from './AppDynamic';
// import App from './components/Prop.jsx'
// import App from "./components/CounterClass.jsx"
// import App from "./components/App_State.jsx"
import App from "./App_News";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
// root.render(<React.StrictMode><App/></React.StrictMode>);
/*
const x=5;
let text="Goodbye";
if(x<10)
{
  text= "Hello from React.. What's that reaction!!!";
}

const myElement= <h1>{text}</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
*/

// const myElement= <h1>I like Jsx..</h1>;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);

// const x=50;
// const myElement= <h1>{(x) <10 ? "Hello React" : "Goodbye React"}</h1>;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);
reportWebVitals();
