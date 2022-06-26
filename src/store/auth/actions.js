import * as TYPE from './types'

const loginHandle = user => ({
  type: TYPE.AUTH_LOGIN,
  user,
})
