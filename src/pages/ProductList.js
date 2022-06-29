import { CircularProgress, Grid } from '@mui/material'
import React, { useCallback, useLayoutEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import ProductContainer from '../layout/ProductContainer'
import CallAPi from '../utilities/callAPi'
import Loading from '../utilities/Loading'
import { productInstance } from '../utilities/productsInstance'

const ProductList = () => {
  const { id } = useParams()
  const { data, isFetching } = CallAPi({
    QueryName: 'product list',
    axios: true,
    instance: productInstance,
    method: 'GET',
    url: '/products',
    refetchOnWindowFocus: false,
  })
  useLayoutEffect(() => {}, [id])
  return isFetching ? (
    <Loading />
  ) : (
    <Grid container sx={{ mt: 5 }} spacing={3}>
      <Grid item md={12}>
        <ProductContainer>
          {data.data.map((product, index, arr) => (
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
