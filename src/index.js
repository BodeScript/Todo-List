import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginForm from './Components/LoginReg/LoginForm/LoginForm';
import RegisterForm from './Components/LoginReg/RegisterForm/RegisterForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
// remover os /* */

// to-do list

/* root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */


// login

/* root.render(
  <React.StrictMode>
    <LoginForm />
  </React.StrictMode>
); */


// registro

root.render(
  <React.StrictMode>
    <RegisterForm />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
