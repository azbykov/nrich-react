import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {ToastContainer} from 'react-toastify';

import {reducer} from './store/reducer';
import App from './components/app';

const store = configureStore({
  reducer
});

const rootElement = document.getElementById('root');
render(
  <Provider store={store}>
    <ToastContainer />
    <App />
  </Provider>
, rootElement);
