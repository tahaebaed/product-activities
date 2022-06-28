import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Grid, IconButton } from '@mui/material'
import { AddShoppingCartRounded } from '@mui/icons-material'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import { useDispatch, useSelector } from 'react-redux'
import { handleAddToCart, handleRemoveToCart } from '../store/products/actions'

function ProductCard({ product }) {
  const cartList = useSelector(state => state.products)
  const dispatch = useDispatch()

  const filtered = cartList.filter(cartProd => cartProd.id === product.id)
  return (
    <Card sx={{ maxWidth: 345, maxHeight: 350 }}>
      <CardMedia
        component='img'
        height='200'
        sx={{ objectFit: 'contain' }}
        image={product.image}
        alt='green iguana'
      />
      <CardContent>
        <Grid container direction='column'>
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
        <Grid container>
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
          <Grid item md={2}>
            <CardActions>
              {filtered.length > 0 ? (
                <IconButton
                  onClick={() => dispatch(handleRemoveToCart(product.id))}
                >
                  <ShoppingCartRoundedIcon />
                </IconButton>
              ) : (
                <IconButton
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
            </CardActions>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default ProductCard
