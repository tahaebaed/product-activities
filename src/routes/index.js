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
import NoAuthRoutes from './NoAuthRoutes'
import AuthRoutes from './AuthRoutes'

const RenderRoutes = () => (
  <React.Suspense fallback={<Loading />}>
    <Routes>
      <Route
        path='/'
        element={
          <AuthRoutes redirectTo='/user/products'>
            <Login />
          </AuthRoutes>
        }
      />
      <Route
        path='/Sign%20up'
        element={
          <AuthRoutes redirectTo='/user/products'>
            <Signup />
          </AuthRoutes>
        }
      />
      <Route
        path='/user/profile'
        element={
          <NoAuthRoutes redirectTo='/'>
            <Profile />
          </NoAuthRoutes>
        }
      />
      <Route
        path='/user/products'
        element={
          <NoAuthRoutes redirectTo='/'>
            <ProductList />
          </NoAuthRoutes>
        }
      />
      <Route
        path='/user/edit'
        element={
          <NoAuthRoutes redirectTo='/'>
            <EditProfile />
          </NoAuthRoutes>
        }
      />
      <Route
        path='/product/:id'
        element={
          <NoAuthRoutes redirectTo='/'>
            <ProductInfo />
          </NoAuthRoutes>
        }
      />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </React.Suspense>
)

export default RenderRoutes
