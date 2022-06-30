import axios from 'axios'
import { toast } from 'react-toastify'

export const userInstance = axios.create({
  baseURL: 'https://api-nodejs-todolist.herokuapp.com/',
  // baseURL: 'https://apingweb.com/api/',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
})

userInstance.interceptors.request.use(
  req => {
    req.url !== 'user/login' &&
      (req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`)
    return req
  },
  error => {
    toast.error(error)
  }
)
