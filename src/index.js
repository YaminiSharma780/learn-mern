// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// // createRoot => Dom Manipulation
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // Strict Mode will help us to create the constant values
//   // Here App  is the filename from App.js file, even after changing value of App in App.js
//   // Becoz any function with {export default} will be exported
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// reportWebVitals();

// PROJECT ROUTING 2
import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css" ;
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>
  
);

reportWebVitals();

