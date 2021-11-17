import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './styles.scss';
 import App from './App.jsx';
 import store from './store';
const Index = () => {
  return <div>Welcome to Fridge Dive!</div>;
};

//*example to import from file: import TotalsDisplay from './components/TotalsDisplay.jsx';


render(
  // wrap the App in the Provider Component and pass in the store
  <div> 
  <Provider store = {store}> 
    <App />
  </Provider>
  </div>,
  document.getElementById('contents') //this was provided to us
);