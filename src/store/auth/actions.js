import * as TYPE from './types'

export const loginHandle = user => ({
  type: TYPE.AUTH_LOGIN,
  user,
})
