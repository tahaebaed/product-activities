import { combineReducers } from 'redux'
import userReducer from '../auth/reducer'
import productsReducer from '../products/reducer'

const reducers = combineReducers({
  user: userReducer,
  products: productsReducer,
})

export default reducers
