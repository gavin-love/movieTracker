import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./container/app/App";
import { Provider } from 'react-redux';
import { createStore } from 'react-redux';
import rootReducer from './Reducers/index.js';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>
  , document.getElementById("root"));
