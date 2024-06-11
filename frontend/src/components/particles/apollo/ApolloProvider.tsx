import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { FC } from "react";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

interface ApolloWrapperProps {
  children: React.ReactNode;
}

const ApolloWrapper: FC<ApolloWrapperProps> = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default ApolloWrapper;
