import "@fontsource/satisfy/400.css";
import "@fontsource/open-sans";

import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import { ContextProvider } from "@utils/Context";

import client from "@utils/apolloClient";
import custom_theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={custom_theme}>
      <ApolloProvider client={client}>
        <ContextProvider>
          <Component {...pageProps} />
        </ContextProvider>
      </ApolloProvider>
    </ChakraProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
