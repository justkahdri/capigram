import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  from,
  HttpLink,
} from "@apollo/client";

import { onError } from "@apollo/client/link/error";

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem("user_token");
  const authorization = token ? `bearer ${token}` : "";
  operation.setContext({
    headers: { authorization },
  });

  return forward(operation);
});

const errorMiddleware = onError(({ graphQLErrors }) => {
  if (
    graphQLErrors &&
    graphQLErrors.length == 1 &&
    graphQLErrors[0].message == "user does not exist"
  ) {
    sessionStorage.removeItem("user_token");
    window.location.href = "/";
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    errorMiddleware,
    authMiddleware,
    new HttpLink({ uri: "https://capigram-server.vercel.app/graphql" }),
  ]),
});

export default client;
