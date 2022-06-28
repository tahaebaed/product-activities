import * as TYPE from './types'

export const handleAddToPurchased = (productS, details) => ({
  type: TYPE.ADD_TO_PURCHASED,
  payload: productS,
  details,
})
