import {
  addProductToCart,
  controlProductAmount,
  removeProductFromCart,
} from './mutatingCartFuncs'
import * as TYPE from './types'

const productsReducer = (
  initState = JSON.parse(localStorage.getItem('cartItem')) || [],
  action
) => {
  switch (action.type) {
    case TYPE.ADD_CART_PRODUCT:
      return (initState = addProductToCart(initState, action))
    case TYPE.REMOVE_CART_PRODUCT:
      return (initState = removeProductFromCart(initState, action))

    case TYPE.ADD_AMOUNT:
      return (initState = controlProductAmount(initState, action))
    default:
      return initState
  }
}

export default productsReducer
