import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ global, children, ...rest }) => {
  return (
    <Route {...rest} render={() => {
      return global.responsable
        ? children
        : <Redirect to='/' />
    }} />
  )
}

export default PrivateRoute