import { Routes, Route } from 'react-router-dom'
import React from 'react'

import {
  EditProfile,
  Login,
  NotFound,
  ProductList,
  Profile,
  Signup,
} from './lazyLoading'
import Loading from '../utilities/Loading'
import ProductInfo from '../pages/ProductInfo'

const RenderRoutes = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Sign%20up' element={<Signup />} />
        <Route path='/user/profile' element={<Profile />} />
        <Route path='/user/products' element={<ProductList />} />
        <Route path='/user/edit' element={<EditProfile />} />
        <Route path='/product/:id' element={<ProductInfo />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </React.Suspense>
  )
}

export default RenderRoutes
