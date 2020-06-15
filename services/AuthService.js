import Router from "next/router"
import cookie from "js-cookie";

export default class AuthService {
  constructor(domain) {
    this.domain = domain || 'http://localhost:8000/api'
    this.fetch = this.fetch.bind(this)
    this.login = this.login.bind(this)
    //this.getProfile = this.getProfile.bind(this)
  }

  login(email, password) {
    return this.fetch(`${this.domain}/users/login`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      })
    }).then(res => {
      //cookie.set("token", res.accessToken, { expires: 1 });
      this.setToken(res.accessToken);
      //this.setProfile(res.user);
      return Promise.resolve(res);
    })
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken()
    return !!token //&& !isTokenExpired(token) // handwaiving here
  }

  setToken(idToken) {
    cookie.set("token", idToken);
  }

  getToken() {
    return cookie.get('token');
  }

  logout() {
    cookie.remove('token');
    Router.push('/');
  }

  _checkStatus(response) {
    // raises an error in case response status is not a success
    console.log(response);
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      if (response.status === 401) {
        Router.push('/signin')
      }
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }

  getHeader() {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    console.log('token: ', this.getToken())
    if (this.loggedIn()) {
      headers['Authorization'] = 'Bearer ' + this.getToken()
    }
    return headers;
  }

  fetch(url, options) {
    // performs api calls sending the required authentication headers
    const headers = this.getHeader();

    return fetch(url, {
      headers,
      ...options
    })
      .then(this._checkStatus)
      .then(response => response.json())
  }
}