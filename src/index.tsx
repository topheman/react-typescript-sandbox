import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import Router from "./Router";

/**
 * This is where you add the root providers (like react-redux Provider)
 */
const render = (Component: React.ComponentType) => {
  ReactDOM.render(<Component />, document.getElementById("root"));
};

render(Router);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot) {
  module.hot.accept("./Router", () => {
    render(Router);
  });
}
