import '../styles/styles.css';

import {ApolloProvider} from '@apollo/client';
import {NextComponentType} from 'next';
import {AppContext, AppInitialProps, AppProps} from 'next/app';
import Head from 'next/head';

import Notification from '../components/Notification/Notification';
import ThemeSwitcherContext from '../components/ThemeSwitcher/ThemeSwitcherContext';
import {useApollo} from '../util/apolloClient';

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <ThemeSwitcherContext>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
          <Notification />
        </ApolloProvider>
      </ThemeSwitcherContext>
    </>
  );
};

export default App;
