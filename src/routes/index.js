import { Routes, Route } from 'react-router-dom'
import React from 'react'

import {
  Home,
  Login,
  NotFound,
  ProductList,
  Profile,
  Signup,
} from './lazyLoading'

const RenderRoutes = () => {
  return (
    <React.Suspense fallback={<p>Loading ...</p>}>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/login' element={<Login />} />
        <Route path='/Sign%20up' element={<Signup />} />
        <Route path='/user/profile' element={<Profile />} />
        <Route path='/user/products' element={<ProductList />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </React.Suspense>
  )
}

export default RenderRoutes
