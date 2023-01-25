import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter as AppRouter } from "react-router-dom";
import store from './store/store';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter>
        <App />
      </AppRouter>
    </Provider>
  </React.StrictMode>
);