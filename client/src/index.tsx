import React,{  Profiler } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <Profiler id='App' onRender={()=>{}}>
    <App />
  </Profiler>,
  document.getElementById('root')
);


