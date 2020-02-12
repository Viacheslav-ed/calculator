import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { StateContextProvider } from './hooks/context';
import '@babel/polyfill';

ReactDOM.render(
  <StateContextProvider>
    <App />
  </StateContextProvider>,
  document.getElementById('app')
);
