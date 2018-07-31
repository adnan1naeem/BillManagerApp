import Home from "./Pages/Home/Home"
import BillListing from "./Pages/BillListing/BillListing"
import CreateBill from "./Pages/CreateBill/CreateBill"
import { NativeRouter, BackButton, Route } from 'react-router-native';
import React from 'react'
import {View} from 'react-native'
import { ApolloProvider } from 'react-apollo'
import { client } from "./ApolloConfigurations"

const App = () => (
  <ApolloProvider client={client}>
    <	NativeRouter>
      <BackButton>
        <Routes />
      </BackButton>

    </NativeRouter >
  </ApolloProvider>
);

const Routes = () => {

  return (
    <View>
      <Route exact path="/" component={Home} />
      <Route path="/create" component={CreateBill} />
      <Route path="/listing" component={BillListing} />
    </View>);
}

export default App
