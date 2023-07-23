import { ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import ApolloClient from "../services/apollo-client";
import store from "../store";

const DataContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <ApolloProvider client={ApolloClient}>
        <Provider store={store}>{children}</Provider>
      </ApolloProvider>
    </>
  );
};

export default DataContainer;
