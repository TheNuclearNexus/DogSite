import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import EventEmitter from 'events';


let currency: number = 0;
export const events = new EventEmitter()

export const addCurrency = (amount: number) => {
  currency += amount
  events.emit('change-currency', currency)
}
export const getCurrency = () => currency;

ReactDOM.render(
  <div style={{width:'100%',height:'100%'}}>
    <App/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
