import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './app/App';
import './style.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
