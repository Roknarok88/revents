import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/Layout/App.jsx";
import reportWebVitals from "./reportWebVitals";

const rootEl = document.getElementById("root");

let render = () => {
  ReactDOM.render(<App />, rootEl);
};

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

if (module.hot) {
  module.hot.accept("./App/Layout/App", () => {
    setTimeout(render);
  });
}

render();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
