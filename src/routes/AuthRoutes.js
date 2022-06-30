import React from 'react'
import { Navigate } from 'react-router-dom'

function AuthRoutes({ user, children, redirectTo }) {
  if (user) {
    return <Navigate to={redirectTo} replace />
  }

  return children
}

export default AuthRoutes
