import { addNewUser, editUserData } from './mutatingUserFuncs'
import * as TYPE from './types'

const userReducer = (initState = null, action) => {
  switch (action.type) {
    case TYPE.AUTH_LOGIN:
      localStorage.setItem('token', action.payload.token)
      return (initState = { ...action.payload })
    case TYPE.AUTH_LOGIN_WITH_TOKEN:
      return (initState = { ...action.payload })
    case TYPE.AUTH_REGISTER:
      addNewUser(action)
      return (initState = { ...action.payload })
    case TYPE.AUTH_LOGOUT:
      localStorage.removeItem('token')
      return (initState = null)
    case TYPE.AUTH_EDIT:
      return (initState = editUserData(initState, action))
    case TYPE.AUTH_DELETE:
      return (initState = { ...action.payload })
    default:
      return initState
  }
}

export default userReducer
