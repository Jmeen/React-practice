import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App.props'; // propts 태스트
// import App from './App.state'; // state 테스트
import App from "./App.function" // 함수형 컴포넌트 테스트
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
