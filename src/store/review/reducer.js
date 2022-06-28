import * as TYPE from './types'

const reviewReducer = (initState = [], action) => {
  switch (action.type) {
    case TYPE.ADD_REVIEW_PRODUCT:
      return (initState = action.payload)
    case TYPE.REMOVE_REVIEW_PRODUCT:
      const filtered = initState.filter(
        product => product.id !== action.payload
      )
      return (initState = filtered)

    default:
      return initState
  }
}

export default reviewReducer
