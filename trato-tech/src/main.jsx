import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './routes';
import store from './store';
import { Provider } from 'react-redux';
import { createStandaloneToast } from '@chakra-ui/toast';
const { ToastContainer, toast } = createStandaloneToast();
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router />
    <ToastContainer />
  </Provider>,
);
