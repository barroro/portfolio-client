import Router from 'next/router';
import AuthService from '../services/AuthService';
import { Component } from 'react';
import nextCookie from 'next-cookies'

//const authService = new AuthService();

export const auth = ctx => {
  const { token } = nextCookie(ctx)
  //const token = authService.getToken();
  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: '/signin' })
    ctx.res.end()
    return
  }

  if (!token) {
    Router.push('/signin')
  }

  return token
}

const getDisplayName = Component =>
  Component.displayName || Component.name || 'Component'

export const withAuthSync = WrappedComponent =>
  class extends Component {
    static displayName = `withAuthSync(${getDisplayName(WrappedComponent)})`

    static async getInitialProps(ctx) {
      const token = auth(ctx)

      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx))

      return { ...componentProps, token }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }