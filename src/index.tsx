const React = require("react");
const ReactDOM = require("react-dom");

import App from "./App"

const SSR = <App />

// Render only in the browser, export otherwise

ReactDOM.hydrate(SSR, document.getElementById("app"));


