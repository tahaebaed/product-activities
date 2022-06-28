import * as TYPE from './types'

export const handleAddToCart = product => ({
  type: TYPE.ADD_CART_PRODUCT,
  payload: product,
})

export const handleAddAmount = product => ({
  type: TYPE.ADD_AMOUNT,
  payload: product,
})

export const handleRemoveToCart = id => ({
  type: TYPE.REMOVE_CART_PRODUCT,
  payload: id,
})
