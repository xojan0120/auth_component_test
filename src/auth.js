import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Home    from './home';

const Auth = (props) => {
  const auth = props.auth;
  return auth ? props.children : <Route component={Home} />
}

export default Auth
