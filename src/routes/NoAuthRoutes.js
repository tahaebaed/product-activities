import React from 'react'
import { Navigate } from 'react-router-dom'

function NoAuthRoutes({ user, children, redirectTo }) {
  if (!user) {
    return <Navigate to={redirectTo} replace />
  }

  return children
}

export default NoAuthRoutes
