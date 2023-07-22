import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
} from "@apollo/client";

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_SERVER_API_URL,
});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => {
    const token = localStorage.getItem("token");
    if (token) {
      headers = { ...headers, authorization: `Bearer ${token}` };
    }
    return {
      headers,
    };
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

// Create a Apollo Client with the link and cache
const client = new ApolloClient({
  link: authMiddleware.concat(httpLink), // Chain it with the HttpLink
  cache: new InMemoryCache(),
});

export default client;
