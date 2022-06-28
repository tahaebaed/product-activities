import * as TYPE from './types'

const productsReducer = (
  initState = JSON.parse(localStorage.getItem('cartItem')) || [],
  action
) => {
  switch (action.type) {
    case TYPE.ADD_CART_PRODUCT:
      localStorage.setItem(
        'cartItem',
        JSON.stringify([...initState, action.payload])
      )
      return (initState = [...initState, action.payload])
    case TYPE.REMOVE_CART_PRODUCT:
      const filtered = initState.filter(
        product => product.id !== action.payload
      )
      return (initState = filtered)

    case TYPE.ADD_AMOUNT:
      console.log(action.payload.id)
      const updated = initState.map(item =>
        item.id === action.payload.id
          ? {
              ...item,
              amount: action.payload.amount,
            }
          : item
      )
      localStorage.setItem('cartItem', JSON.stringify(updated))
      return (initState = updated)
    default:
      return initState
  }
}

export default productsReducer
