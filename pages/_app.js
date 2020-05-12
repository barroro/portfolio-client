import React, { useRef } from 'react';
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

import { TweenMax } from 'gsap';

export default function MyApp(props) {
  const { Component, pageProps, router } = props;

  // let cursor = useRef(null);
  // let follower = useRef(null);

  // let posX = 0,
  //   posY = 0;

  // let mouseX = 0,
  //   mouseY = 0;

  // TweenMax.to({}, 0.016, {
  //   repeat: -1,
  //   onRepeat: function () {
  //     posX += (mouseX - posX) / 9;
  //     posY += (mouseY - posY) / 9;

  //     TweenMax.set(follower, {
  //       css: {
  //         left: posX - 12,
  //         top: posY - 12
  //       }
  //     });

  //     TweenMax.set(cursor, {
  //       css: {
  //         left: mouseX,
  //         top: mouseY
  //       }
  //     });
  //   }
  // });

  const getLayout = () => {
    if (router.pathname.startsWith('/dashboard/')) {
      return (
        <DashboardLayout>
          <div className="main-container">
            <Component {...pageProps} />
          </div>
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
          {/* <div ref={e => cursor = e} class="cursor"></div>
          <div ref={e => follower = e} class="cursor-follower"></div> */}
          {getLayout()}
        </ThemeProvider>
      </Provider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
