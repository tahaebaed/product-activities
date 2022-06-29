import { lazy } from 'react'

export const Login = lazy(() => import('../pages/Login'))
export const Signup = lazy(() => import('../pages/SignUp'))
export const ProductList = lazy(() => import('../pages/ProductList'))
export const Profile = lazy(() => import('../pages/Profile'))
export const EditProfile = lazy(() => import('../layout/EditProfile'))
export const NotFound = lazy(() => import('../pages/NotFound'))
