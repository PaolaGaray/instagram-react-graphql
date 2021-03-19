import { ApolloClient, InMemoryCache } from '@apollo/client';
import { WebSocketLink } from "@apollo/client/link/ws";



const client = new ApolloClient({
    link: new WebSocketLink({
        uri:'wss://instagram-react-graphql.herokuapp.com/v1/graphql',
        options: {
          reconnect: true,
          connectionParams: {
            headers
          }
        }
      }),
    cache: new InMemoryCache()
});

export default client;
