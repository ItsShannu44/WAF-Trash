import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App_Child_to_Parent'

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
