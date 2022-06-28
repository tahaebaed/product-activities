import { combineReducers } from 'redux'
import userReducer from '../auth/reducer'
import productsReducer from '../products/reducer'
import purchasedProductsReducer from '../purchased-product/reducer'
import reviewReducer from '../review/reducer'

const reducers = combineReducers({
  user: userReducer,
  products: productsReducer,
  review: reviewReducer,
  purchased: purchasedProductsReducer,
})

export default reducers
