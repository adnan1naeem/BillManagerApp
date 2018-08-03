import Home from "./pages/Home/Home"
import BillListing from "./pages/BillListing/BillListing"
import CreateBill from "./pages/CreateBill/CreateBill"
import { NativeRouter, BackButton, Route } from 'react-router-native';
import React from 'react'
import { View } from 'react-native'
import { ApolloProvider } from 'react-apollo'
import { client } from "./ApolloConfigurations"

const App = () => (
    <ApolloProvider client={client}>
        <NativeRouter>
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
