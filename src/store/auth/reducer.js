import * as TYPE from './types'

const reducer = (initState = null, action) => {
  switch (action.type) {
    case TYPE.AUTH_LOGIN:
      return (initState = { ...action.payload })
    case TYPE.AUTH_REGISTER:
      return (initState = { ...action.payload })
    case TYPE.AUTH_EDIT:
      return (initState = { ...action.payload })
    case TYPE.AUTH_DELETE:
      return (initState = { ...action.payload })
    default:
      return initState
  }
}

export default reducer
