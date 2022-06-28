import * as TYPE from './types'

export const handleAddToReview = productS => ({
  type: TYPE.ADD_REVIEW_PRODUCT,
  payload: productS,
})

export const handleRemoveFromReview = id => ({
  type: TYPE.REMOVE_REVIEW_PRODUCT,
  payload: id,
})
