import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './components/Portal_Navigation';
// import App from './components/Student_Profile';
import Student from './Student';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Student />
  </React.StrictMode>
);
reportWebVitals();
