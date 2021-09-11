import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/app';

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { HOME_FEATURE_KEY, homeReducer } from './app/home/home.slice';

import { USERS_FEATURE_KEY, usersReducer } from './app/users/users.slice';

const store = configureStore({
  reducer: {
    [USERS_FEATURE_KEY]: usersReducer,
    [HOME_FEATURE_KEY]: homeReducer,
  },
  // Additional middleware can be passed to this array
  middleware: [...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== 'production',
  // Optional Redux store enhancers
  enhancers: [],
});
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
