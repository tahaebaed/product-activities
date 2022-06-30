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
import { useSelector } from 'react-redux'
import AuthRoutes from './AuthRoutes'

const RenderRoutes = () => {
  const user = useSelector(state => state.user)
  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        <Route
          path='/'
          element={
            <AuthRoutes redirectTo='/user/products' user={user}>
              <Login />
            </AuthRoutes>
          }
        />
        <Route
          path='/Sign%20up'
          element={
            <AuthRoutes redirectTo='/user/products' user={user}>
              <Signup />
            </AuthRoutes>
          }
        />
        <Route
          path='/user/profile'
          element={
            <NoAuthRoutes redirectTo='/' user={user}>
              <Profile />
            </NoAuthRoutes>
          }
        />
        <Route
          path='/user/products'
          element={
            <NoAuthRoutes redirectTo='/' user={user}>
              <ProductList />
            </NoAuthRoutes>
          }
        />
        <Route
          path='/user/edit'
          element={
            <NoAuthRoutes redirectTo='/' user={user}>
              <EditProfile />
            </NoAuthRoutes>
          }
        />
        <Route
          path='/product/:id'
          element={
            <NoAuthRoutes redirectTo='/' user={user}>
              <ProductInfo />
            </NoAuthRoutes>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </React.Suspense>
  )
}

export default RenderRoutes
