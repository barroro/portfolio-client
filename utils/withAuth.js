import React, { Component } from 'react'
import AuthService from '../services/AuthService';
import Router from 'next/router'

export default function withAuth(AuthComponent) {
  const Auth = new AuthService('http://localhost:8000/api')
  return class Authenticated extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isLoading: true
      };
    }

    static async getInitialProps(ctx) {

    }

    componentDidMount() {
      if (!Auth.loggedIn()) {
        console.log('Forbidden!');
        Router.push('/');
        //router.push('/');
        //this.props.url.replaceTo('/')
      }
      this.setState({ isLoading: false })
    }

    render() {
      return (
        <div>
          {this.state.isLoading ? (
            <div>LOADING....</div>
          ) : (
              <AuthComponent {...this.props} auth={Auth} />
            )}
        </div>
      )
    }
  }
}