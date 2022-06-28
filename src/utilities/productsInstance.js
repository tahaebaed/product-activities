import axios from 'axios'

export const productInstance = axios.create({
  baseURL: 'https://fakestoreapi.com',
})
