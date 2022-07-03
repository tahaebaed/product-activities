import React from 'react'
import { useDispatch } from 'react-redux'
import Header from '../layout/Header'
import RenderRoutes from '../routes'
import { handleLoginWithToken } from '../store/auth/actions'

const Screens = () => {
  const dispatch = useDispatch()

  !!localStorage.getItem('token') &&
    new Promise((resolve, reject) => {
      resolve(localStorage.getItem('token'))
    }).then(res => {
      const users = JSON.parse(localStorage.getItem('users'))
      const getUser = users.filter(user => user.token === res)
      dispatch(handleLoginWithToken(getUser[0]))
    })
  return (
    <>
      <Header />
      <RenderRoutes />
    </>
  )
}

export default Screens
