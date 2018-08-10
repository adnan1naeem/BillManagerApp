import * as React from 'react'
import Home from "../pages/Home/Home"
import BillListing from "../pages/BillListing/Container"
import CreateBill from "../pages/CreateBill/CreateBill"
import { View, Text } from 'react-native'
import { ApolloProvider, getDataFromTree } from 'react-apollo'
import { StaticRouter, Router, Route, Switch, MemoryRouter, matchRoute } from 'react-router'
import { Platform, StyleSheet } from 'react-native';
//import { BrowserRouter } from 'react-router-dom'
//import { Routess } from "../src/react-router"
import ReactDOM from 'react-dom';
import createMemoryHistory from 'history/createMemoryHistory'
import { renderToStringWithData } from "react-apollo"

import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import fetch from 'node-fetch';


const history = createMemoryHistory();



const Routes = () => {

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/create" component={CreateBill} />
      <Route path="/listing" component={BillListing} />
    </Switch>
  );
}



const httpLink = new HttpLink({
  uri: 'https://api.graph.cool/simple/v1/cjk3wyu0c5you0107e5a48dgk',
  fetch
});



const client = new ApolloClient({
  ssrMode: true,
  link: httpLink,
  cache: new InMemoryCache(),
})


const App = () => (

  <ApolloProvider client={client} >
    <StaticRouter>
      <Routes />
    </StaticRouter>
  </ApolloProvider >
);


export { client, Routes };
export default App;
