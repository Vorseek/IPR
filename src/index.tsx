import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/scss/main.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import App from 'container/App';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root') as HTMLElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// import reportWebVitals from "./reportWebVitals";
// reportWebVitals();
