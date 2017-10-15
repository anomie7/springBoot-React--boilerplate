import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './style.css'

const rootElement = document.getElementById('react');    
ReactDOM.render(<App/>, rootElement);

if (module.hot) {
    module.hot.accept();
  }