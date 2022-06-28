import * as TYPE from './types'

const purchasedProductsReducer = (
  initState = JSON.parse(localStorage.getItem('purchased')) || [],
  action
) => {
  switch (action.type) {
    case TYPE.ADD_TO_PURCHASED:
      localStorage.setItem(
        'purchased',
        JSON.stringify([
          ...initState,
          {
            purchasedAt: new Date().getDate(),
            items: [...action.payload],
            details: action.details,
          },
        ])
      )
      return (initState = [
        ...initState,
        {
          purchasedAt: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}`,
          items: [...action.payload],
          details: action.details,
        },
      ])
    default:
      return initState
  }
}

export default purchasedProductsReducer
