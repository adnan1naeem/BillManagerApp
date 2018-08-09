const React = require("react");
const ReactDOM = require("react-dom");

import App from "./App"

const SSR = <App />

// Render only in the browser, export otherwise

if (process.browser) {
  ReactDOM.hydrate(SSR, document.getElementById("app"));
}
else {

  module.exports = SSR;

}