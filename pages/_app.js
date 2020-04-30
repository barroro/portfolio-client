import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import "../styles.scss";

import { Provider } from 'react-redux'
import store from '../redux/configureStore';
import DashboardLayout from '../components/dashboard-layout';
import PublicLayout from '../components/public-layout';

export default function MyApp(props) {
  const { Component, pageProps, router } = props;

  const getLayout = () => {
    if (router.pathname.startsWith('/dashboard/')) {
      return (
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      )
    } else {
      return (
        <Component {...pageProps} />
      )
    }
  }

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <div className="main-container">
            {getLayout()}
          </div>
        </ThemeProvider>
      </Provider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
