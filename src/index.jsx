import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui/core';
import '@babel/polyfill';

function App() {
  return (
    <>
      <CssBaseline>
        <div className="text">Lease and Loan calculator</div>
      </CssBaseline>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
