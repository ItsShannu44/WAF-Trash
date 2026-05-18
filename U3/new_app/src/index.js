import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './components/Increment_Decrement'
// import App from './components/Dynamic_Row'
// import App from './components/Add_Btn_Event'
// import App from './components/Lifting_Up'
// import App from './components/Student_Attendance'
// import App from './components/Shopping_Cart'
// import App from './components/Directory_Filter'
// import App from './components/Movie_Review'
import App from './components/Temperature_Converter'

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();

