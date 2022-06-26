import * as TYPE from './types'

const productsReducer = (initState = null, action) => {
  switch (action.type) {
    case TYPE.GET_PRODUCT_LIST:
      return (initState = { ...action.payload })
    case TYPE.GET_PRODUCT:
      return (initState = { ...action.payload })
    case TYPE.UPDATE_PRODUCT:
      return (initState = { ...action.payload })
    case TYPE.DELETE_PRODUCT:
      return (initState = { ...action.payload })
    default:
      return initState
  }
}

export default productsReducer
