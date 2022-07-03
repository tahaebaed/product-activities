export const addProductToCart = (state, action) => {
  localStorage.setItem('cartItem', JSON.stringify([...state, action.payload]))

  return [...state, action.payload]
}

export const removeProductFromCart = (state, action) => {
  const filtered = state.filter(product => product.id !== action.payload)
  localStorage.setItem('cartItem', JSON.stringify(filtered))
  return filtered
}

export const controlProductAmount = (state, action) => {
  const updated = state.map(item =>
    item.id === action.payload.id
      ? {
          ...item,
          amount: action.payload.amount,
        }
      : item
  )
  localStorage.setItem('cartItem', JSON.stringify(updated))
  return updated
}
