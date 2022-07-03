export const purchaseComplete = (state, action) => {
  localStorage.setItem(
    'purchased',
    JSON.stringify([
      ...state,
      {
        purchasedAt: `${new Date().getFullYear()}-${
          new Date().getMonth() + 1
        }-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}`,
        items: [...action.payload],
        details: action.details,
      },
    ])
  )
  return [
    ...state,
    {
      purchasedAt: `${new Date().getFullYear()}-${
        new Date().getMonth() + 1
      }-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}`,
      items: [...action.payload],
      details: action.details,
    },
  ]
}
