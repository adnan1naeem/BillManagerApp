import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';



const wsLink = new WebSocketLink({
  uri: 'wss://subscriptions.graph.cool/v1/cjk3wyu0c5you0107e5a48dgk',
  options: {
    reconnect: true
  }
});
const httpLink = new HttpLink({
  uri: 'https://api.graph.cool/simple/v1/cjk3wyu0c5you0107e5a48dgk'
});


const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation }: any = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);


const client = new ApolloClient({
  // link: new HttpLink({ uri: GRAPHCMS_API }),
  link,
  cache: new InMemoryCache(),
})



export { client };