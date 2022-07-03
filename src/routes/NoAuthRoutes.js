import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function NoAuthRoutes({ children, redirectTo }) {
  const user = useSelector(state => state.user)

  if (!user) {
    return <Navigate to={redirectTo} replace />
  }

  return children
}

export default NoAuthRoutes
