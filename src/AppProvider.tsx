import React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { FunctionComponent } from "react";

const queryClient = new QueryClient();

const AppProvider: FunctionComponent = ({ children }) => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>{children}</BrowserRouter>
    </QueryClientProvider>
  </ChakraProvider>
);

export default AppProvider;
