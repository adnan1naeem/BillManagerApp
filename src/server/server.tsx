
const express = require("express");
const { renderToString } = require("react-dom/server");
import App from "../App"
import * as React from 'react'

const SSR = require("../index");

server(process.env.PORT || 9090);

function server(port) {
  const app = express();

  app.use(express.static("static"));
  app.get("/", (req, res) =>
    res.status(200).send(renderMarkup(renderToString(<App />)))
  );

  app.listen(port);

  console.log("\n", `app Listening at port:${9090}`);
}

function renderMarkup(html) {
  return `<!DOCTYPE html>
<html>
  <head>
    <title>Webpack SSR Demo</title>
    <meta charset="utf-8" />
  </head>
  <body>
    <div id="app">${html}</div>
    <script src="./index.js"></script>
  </body>
</html>`;
}