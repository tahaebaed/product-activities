import { AddShoppingCartRounded } from '@mui/icons-material'
import { Container, Grid, IconButton, Typography } from '@mui/material'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { handleAddToCart, handleRemoveToCart } from '../store/products/actions'
import CallAPi from '../utilities/callAPi'
import Loading from '../utilities/Loading'
import { productInstance } from '../utilities/productsInstance'

const ProductInfo = () => {
  const { id } = useParams()
  const { data, isFetching } = CallAPi({
    QueryName: 'One Product',
    axios: true,
    instance: productInstance,
    url: `/products/${id}`,
    method: 'GET',
    refetchOnWindowFocus: false,
    retry: 0,
  })
  const cartList = useSelector(state => state.products)
  const dispatch = useDispatch()
  const filtered = cartList.filter(cartProd => cartProd.id === id)

  return isFetching ? (
    <Loading />
  ) : (
    <Container maxWidth='md' sx={{ margin: '6rem auto' }}>
      <Grid container alignItems='center'>
        <Grid item xs={12} md={6}>
          <div>
            <img src={data.data.image} width='200' alt='' />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          {filtered.length > 0 ? (
            <IconButton
              className='card-container-cart_btn'
              onClick={() => dispatch(handleRemoveToCart(data.data.id))}
            >
              <ShoppingCartRoundedIcon />
            </IconButton>
          ) : (
            <IconButton
              className='card-container-cart_btn'
              onClick={() =>
                dispatch(
                  handleAddToCart({
                    id: data.data.id,
                    name: data.data.title,
                    amount: 1,
                    price: data.data.price,
                  })
                )
              }
            >
              <AddShoppingCartRounded />
            </IconButton>
          )}
          <Typography variant='h5' component='h5'>
            Name:
          </Typography>
          <Typography mb={2}>{data.data.title}</Typography>
          <Typography variant='h5' component='h5'>
            Description:
          </Typography>
          <Typography mb={2}>{data.data.description}</Typography>
          <Typography variant='h5' component='h5'>
            Price:
          </Typography>
          <Typography mb={2}>{data.data.price}</Typography>
          <Typography variant='h5' component='h5'>
            Category:
          </Typography>
          <Typography mb={2}>{data.data.category}</Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ProductInfo
