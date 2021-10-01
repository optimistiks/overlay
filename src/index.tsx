import React from "react";
import ReactDOM from "react-dom";
import debug from "debug";
import { Overlay } from "./Overlay";
// import reportWebVitals from './reportWebVitals';

localStorage.debug = "*";
debug.log = console.log.bind(console);

ReactDOM.render(
  <React.StrictMode>
    <Overlay />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
