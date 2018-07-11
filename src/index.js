import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./container/app/App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from 'react-redux';
import { createStore } from 'react-redux';

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();