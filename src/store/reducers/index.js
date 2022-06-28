import { combineReducers } from 'redux'
import userReducer from '../auth/reducer'
import productsReducer from '../products/reducer'
import reviewReducer from '../review/reducer'

const reducers = combineReducers({
  user: userReducer,
  products: productsReducer,
  review: reviewReducer,
})

export default reducers
