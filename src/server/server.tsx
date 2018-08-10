
const Express = require("express");
const { renderToString, renderToStaticMarkup } = require("react-dom/server");
import App from "./serverApollo"
import * as React from 'react'
import routes from "./routes"
import { StaticRouter, Router, Route, Switch, MemoryRouter, matchPath } from 'react-router'
import { client, Routes } from "./serverApollo"
import { ApolloProvider, getDataFromTree } from 'react-apollo'
import ReactDOM from 'react-dom';

const app = new Express();

app.use((req, res) => {


  const context = {};

  const Html = ({ content, state }) => {
    return (
      <html>
        <body>
          <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
          <script dangerouslySetInnerHTML={{
            __html: `window.__APOLLO_STATE__=${JSON.stringify(state).replace(/</g, '\\u003c')};`,
          }} />
        </body>
      </html>
    );
  }
  // The client-side App will instead use <BrowserRouter>
  const App = (
    <ApolloProvider client={client}>
      <StaticRouter location={req.url} context={context}>
        <Routes />
      </StaticRouter>
    </ApolloProvider>
  );

  getDataFromTree(App).then(() => {
    // We are ready to render for real
    const content = renderToString(App);
    const initialState = client.extract();

    const html = <Html content={content} state={initialState} />;

    res.status(200);
    res.send(`<!doctype html>\n${renderToStaticMarkup(html)}`);
    res.end();
  });
  // rendering code (see below)
});

app.listen(9090, () => console.log( // eslint-disable-line no-console
  `app Server is now running on http://localhost:9090`
));