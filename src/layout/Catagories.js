import React from 'react'
import CallAPi from '../utilities/callAPi'
import { productInstance } from '../utilities/productsInstance'

const Catagories = () => {
  const { data: categories } = CallAPi({
    QueryName: 'product category list',
    axios: true,
    instance: productInstance,
    method: 'GET',
    url: '/products/categories',
    refetchOnWindowFocus: false,
    retry: 0,
  })
  return categories?.data?.map(category => <p key={category}>{category}</p>)
}

export default Catagories
