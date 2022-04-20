import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import { BrowserRouter } from "react-router-dom";
import { firebaseApp } from './service/firebase';
import AuthService from './service/auth_service';

const authService = new AuthService();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App authService={authService} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);