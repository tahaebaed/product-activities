import { purchaseComplete } from './mutatingPurchaseFuncs'
import * as TYPE from './types'

const purchasedProductsReducer = (
  initState = JSON.parse(localStorage.getItem('purchased')) || [],
  action
) => {
  switch (action.type) {
    case TYPE.ADD_TO_PURCHASED:
      return (initState = purchaseComplete(initState, action))
    default:
      return initState
  }
}

export default purchasedProductsReducer
