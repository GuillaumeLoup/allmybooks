import React from 'react';
import App from './App';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';


const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store} >
    <App />
  </Provider>
);
