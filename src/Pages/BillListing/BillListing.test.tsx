import * as React from 'react'
import { shallow, configure } from 'enzyme';
import BillListing from "./BillListing";
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { ApolloProvider } from 'react-apollo'
import { NativeRouter } from 'react-router-native';
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { WebSocketLink } from 'apollo-link-ws';

configure({ adapter: new Adapter() })

test('renders correctly', () => {
  shallow(<ApolloProvider client={client}><NativeRouter><BillListing /></NativeRouter></ApolloProvider>);
});


test('renders correctly', () => {
  const tree = renderer.create(
    <ApolloProvider client={client}><NativeRouter><BillListing /></NativeRouter></ApolloProvider>).toJSON();
  expect(tree).toMatchSnapshot();
});



//  Api:
//https://api-euwest.graphcms.com/v1/cjjtwi33j03e501ccj3uicdez/master

const GRAPHCMS_API = 'https://api.graph.cool/simple/v1/cjk3wyu0c5you0107e5a48dgk'

const wsLink = process.browser ? new WebSocketLink({
  uri: 'wss://subscriptions.graph.cool/v1/cjk3wyu0c5you0107e5a48dgk',
  options: {
    reconnect: true
  }
}) : null;
const httpLink = new HttpLink({
  uri: 'https://api.graph.cool/simple/v1/cjk3wyu0c5you0107e5a48dgk'
});


const link = process.browser ? split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation }: any = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
) : null;


const client = new ApolloClient({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  cache: new InMemoryCache(),
})



export { client };



