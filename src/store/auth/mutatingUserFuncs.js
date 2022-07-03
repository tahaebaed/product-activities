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
  const users = JSON.parse(localStorage.getItem('users'))
  localStorage.setItem(
    'users',
    JSON.stringify([...users, { ...action.payload }])
  )
  localStorage.setItem('token', action.payload.token)
}
