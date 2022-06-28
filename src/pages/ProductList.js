import { CircularProgress, Grid } from '@mui/material'
import React from 'react'
import ProductCard from '../components/ProductCard'
import ProductContainer from '../layout/ProductContainer'
import CallAPi from '../utilities/callAPi'
import { productInstance } from '../utilities/productsInstance'

const ProductList = () => {
  const { data, isFetching } = CallAPi({
    QueryName: 'product list',
    axios: true,
    instance: productInstance,
    method: 'GET',
    url: '/products',
    refetchOnWindowFocus: false,
  })

  return isFetching ? (
    <CircularProgress size='2rem' />
  ) : (
    <Grid container sx={{ mt: 5 }} spacing={3}>
      <Grid item md={12}>
        <ProductContainer>
          {data.data.map(product => (
            <Grid item xs={12} md={4} sx={{ mb: 3 }} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </ProductContainer>
      </Grid>
    </Grid>
  )
}

export default ProductList
