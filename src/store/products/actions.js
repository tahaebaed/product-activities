import * as TYPE from './types'

export const getProductsHandle = products => ({
  type: TYPE.AUTH_LOGIN,
  products,
})
