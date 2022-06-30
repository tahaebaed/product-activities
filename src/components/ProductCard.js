import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { IconButton } from '@mui/material'
import { AddShoppingCartRounded } from '@mui/icons-material'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import { useDispatch, useSelector } from 'react-redux'
import { handleAddToCart, handleRemoveToCart } from '../store/products/actions'
import { Link } from 'react-router-dom'
import { Box } from '@mui/system'
import { toast } from 'react-toastify'

import '../sass/productCard.scss'

function ProductCard({ product }) {
  const cartList = useSelector(state => state.products)
  const dispatch = useDispatch()

  const filtered = cartList.filter(cartProd => cartProd.id === product.id)
  return (
    <Box className='card-container' sx={{ maxWidth: 550, maxHeight: 600 }}>
      <Link to={`/product/${product.id}`} className='card-container-link'>
        <Card sx={{ display: 'flex' }} className='card-holder'>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component='div' variant='h6' className='title'>
                {product.title}
              </Typography>
              <Typography
                variant='subtitle1'
                color='text.secondary'
                component='div'
                className='title'
              >
                price: {product.price}$
              </Typography>
            </CardContent>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                pl: 1,
                pb: 1,
              }}
              className='description'
            >
              {product.description}
            </Box>
          </Box>
          <CardMedia
            component='img'
            sx={{ width: 80, objectFit: 'contain' }}
            image={product.image}
            alt='Live from space album cover'
          />
        </Card>
      </Link>

      {filtered.length > 0 ? (
        <IconButton
          className='card-container-cart_btn'
          onClick={() => {
            dispatch(handleRemoveToCart(product.id))
            toast.info(`${product.title} has been removed from cart`)
          }}
        >
          <ShoppingCartRoundedIcon />
        </IconButton>
      ) : (
        <IconButton
          className='card-container-cart_btn'
          onClick={() => {
            dispatch(
              handleAddToCart({
                id: product.id,
                name: product.title,
                amount: 1,
                price: product.price,
              })
            )
            toast.info(`${product.title} has been added from cart`)
          }}
        >
          <AddShoppingCartRounded />
        </IconButton>
      )}
    </Box>
  )
}

export default ProductCard
