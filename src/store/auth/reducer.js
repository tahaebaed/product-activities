import * as TYPE from './types'

const userReducer = (initState = null, action) => {
  switch (action.type) {
    case TYPE.AUTH_LOGIN:
      localStorage.setItem('token', action.payload.token)
      return (initState = { ...action.payload })
    case TYPE.AUTH_LOGIN_WITH_TOKEN:
      return (initState = { ...action.payload })
    case TYPE.AUTH_REGISTER:
      localStorage.setItem('users', JSON.stringify([{ ...action.payload }]))
      localStorage.setItem('token', action.payload.token)
      return (initState = { ...action.payload })
    case TYPE.AUTH_LOGOUT:
      localStorage.removeItem('token')
      return (initState = null)
    case TYPE.AUTH_EDIT:
      const users = JSON.parse(localStorage.getItem('users'))
      initState = { ...initState, ...action.payload }

      const updated = users.map(user => {
        console.log(user.email === action.payload.email)
        return user.email === action.payload.email
          ? {
              ...initState,
            }
          : user
      })
      console.log(updated)

      localStorage.setItem('users', JSON.stringify(updated))
      return initState
    case TYPE.AUTH_DELETE:
      return (initState = { ...action.payload })
    default:
      return initState
  }
}

export default userReducer
