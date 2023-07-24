/* import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' */
/* import './index.css' */

import React, { StrictMode } from "react";
/* import { createRoot } from 'react-dom/client'; */
import ReactDOM, { createRoot } from 'react-dom/client'
import './styles.css';

import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
