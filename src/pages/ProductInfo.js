import AddShoppingCartRounded from '@mui/icons-material/AddShoppingCartRounded'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { handleAddToCart, handleRemoveToCart } from '../store/products/actions'
import CallAPi from '../utilities/callAPi'
import Loading from '../utilities/Loading'
import { productInstance } from '../utilities/productsInstance'
import { toast } from 'react-toastify'

import '../sass/productInfo.scss'

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
  const filtered =
    data && cartList.filter(cartProd => cartProd.id === data.data.id)
  return isFetching ? (
    <Loading />
  ) : (
    <Container maxWidth='md' sx={{ mt: 6 }}>
      <Grid container alignItems='center'>
        <Grid item xs={12} md={6}>
          <div>
            <img src={data.data.image} width='200' alt='' />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container justifyContent='flex-end'>
            {filtered.length > 0 ? (
              <IconButton
                className='product-info-container-cart_btn'
                onClick={() => {
                  dispatch(handleRemoveToCart(data.data.id))
                  toast.info(`${data.data.title} has been removed from cart`)
                }}
              >
                <ShoppingCartRoundedIcon />
              </IconButton>
            ) : (
              <IconButton
                className='product-info-container-cart_btn'
                onClick={() => {
                  dispatch(
                    handleAddToCart({
                      id: data.data.id,
                      name: data.data.title,
                      amount: 1,
                      price: data.data.price,
                    })
                  )
                  toast.info(`${data.data.title} has been added from cart`)
                }}
              >
                <AddShoppingCartRounded />
              </IconButton>
            )}
          </Grid>
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
