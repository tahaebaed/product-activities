export const editUserData = (state, action) => {
  const users = JSON.parse(localStorage.getItem('users'))
  state = { ...state, ...action.payload }

  const updated = users.map(user => {
    return user.email === action.payload.email
      ? {
          ...state,
        }
      : user
  })
  localStorage.setItem('users', JSON.stringify(updated))

  return state
}

export const addNewUser = action => {
  localStorage.setItem('users', JSON.stringify([{ ...action.payload }]))
  localStorage.setItem('token', action.payload.token)
}
