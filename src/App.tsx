import Home from "./Pages/Home/Home"
import BillListing from "./Pages/BillListing/BillListing"
import CreateBill from "./Pages/CreateBill/CreateBill"
// import { createStackNavigator } from 'react-navigation';
import { NativeRouter, BackButton, Route } from 'react-router-native';
import React from 'react'
import View from './components/View/View.Component'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'


//  Api:
//https://api-euwest.graphcms.com/v1/cjjtwi33j03e501ccj3uicdez/master

const GRAPHCMS_API ='https://api.graph.cool/simple/v1/cjk3wyu0c5you0107e5a48dgk'

const client = new ApolloClient({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  cache: new InMemoryCache()
})


const App = () => (
  <ApolloProvider client={client}>
    <	NativeRouter>
      <BackButton>
        <Routes />
      </BackButton>

    </NativeRouter >
  </ApolloProvider>
)


const Routes = () => {

  return (
    <View >
      <Route exact path="/" component={Home} />
      <Route path="/create" component={CreateBill} />
      <Route path="/listing" component={BillListing} />
    </View>);
}

export default App
