import * as React from 'react'
import Home from "./pages/Home/Home"
import BillListing from "./pages/BillListing/Container"
import CreateBill from "./pages/CreateBill/CreateBill"
// import { BackButton, Routr, Route, ReactDOM } from "./react-router"
import { View } from 'react-native'
import { ApolloProvider } from 'react-apollo'
import { client } from "./ApolloConfigurations"
//import { BackButton, Routr } from './react-router/';
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Router, Route, Switch, MemoryRouter } from 'react-router'
// import createBrowserHistory from 'history/createBrowserHistory'

// const history = createBrowserHistory()

const App = () => (

    <ApolloProvider client={client}>
        <MemoryRouter>
            <Routes />
        </MemoryRouter >
    </ApolloProvider>
);



const Routes = () => {

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/create" component={CreateBill} />
            <Route path="/listing" component={BillListing} />
        </Switch>
    );
}

export default App
