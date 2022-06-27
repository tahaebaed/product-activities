import { lazy } from 'react'

export const Home = lazy(() => import('../pages/Home'))
export const Login = lazy(() => import('../pages/Login'))
export const Signup = lazy(() => import('../pages/SignUp'))
export const ProductList = lazy(() => import('../pages/ProductList'))
export const Profile = lazy(() => import('../pages/Profile'))
export const NotFound = lazy(() => import('../pages/NotFound'))
