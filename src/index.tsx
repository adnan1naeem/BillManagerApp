import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./pages/Home/Home"
import BillListing from "./pages/BillListing/BillListing"
import CreateBill from "./pages/CreateBill/CreateBill"
import { Router, Route } from 'react-router';
import { ApolloProvider } from 'react-apollo'
import { client } from "./ApolloConfigurations"

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Routes />
    </Router>
  </ApolloProvider>

);

const Routes = () => {

  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/create" component={CreateBill} />
      <Route path="/listing" component={BillListing} />
    </div>);
}

export default App


ReactDOM.render(<App />, document.getElementById('app'));