import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, Grid, IconButton } from '@mui/material'
import { AddShoppingCartRounded } from '@mui/icons-material'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import { useDispatch, useSelector } from 'react-redux'
import { handleAddToCart, handleRemoveToCart } from '../store/products/actions'
import { Link } from 'react-router-dom'
import { Box } from '@mui/system'

import '../sass/productCard.scss'

function ProductCard({ product }) {
  const cartList = useSelector(state => state.products)
  const dispatch = useDispatch()

  const filtered = cartList.filter(cartProd => cartProd.id === product.id)
  return (
    <Box className='card-container' sx={{ maxWidth: 300, maxHeight: 350 }}>
      <Link to={`/product/${product.id}`} className='card-container-link'>
        <Card className='card-holder'>
          <CardMedia
            component='img'
            height='150'
            sx={{ objectFit: 'contain' }}
            image={product.image}
            alt='green iguana'
          />
          <CardContent>
            <Grid
              container
              direction='column'
              alignItems='flex-start'
              className='card-holder-hover-state'
            >
              <Grid item>
                <Typography variant='caption' component='p'>
                  Category: {product.category}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='caption' component='p'>
                  Price: {product.price}
                </Typography>
              </Grid>
            </Grid>
            <Grid container className='card-holder-hover-state'>
              <Grid item md={10}>
                <Typography
                  gutterBottom
                  variant='subtitle1'
                  component='h4'
                  sx={{ minHeight: '60px' }}
                >
                  {product.title}
                </Typography>
              </Grid>

              <Grid item md={2}></Grid>
            </Grid>
          </CardContent>
        </Card>
      </Link>

      {filtered.length > 0 ? (
        <IconButton
          className='card-container-cart_btn'
          onClick={() => dispatch(handleRemoveToCart(product.id))}
        >
          <ShoppingCartRoundedIcon />
        </IconButton>
      ) : (
        <IconButton
          className='card-container-cart_btn'
          onClick={() =>
            dispatch(
              handleAddToCart({
                id: product.id,
                name: product.title,
                amount: 1,
                price: product.price,
              })
            )
          }
        >
          <AddShoppingCartRounded />
        </IconButton>
      )}
    </Box>
  )
}

export default ProductCard
