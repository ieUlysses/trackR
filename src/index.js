import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from "react-router-dom"
import Provider from "./Context/Provider"


ReactDOM.render(
  <React.StrictMode>

    <Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>


  </React.StrictMode>,
  document.getElementById('root')
);
