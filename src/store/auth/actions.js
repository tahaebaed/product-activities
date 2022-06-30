import * as TYPE from './types'

export const handleLogin = user => ({
  type: TYPE.AUTH_LOGIN,
  payload: user,
})
export const handleLoginWithToken = user => ({
  type: TYPE.AUTH_LOGIN_WITH_TOKEN,
  payload: user,
})
export const signUpHandle = user => ({
  type: TYPE.AUTH_REGISTER,
  payload: user,
})

export const handleLogOut = () => ({
  type: TYPE.AUTH_LOGOUT,
})

export const handleEdit = payload => ({
  type: TYPE.AUTH_EDIT,
  payload,
})
