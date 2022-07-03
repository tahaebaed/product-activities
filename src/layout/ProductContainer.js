import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import React from 'react'

const ProductContainer = ({ children }) => (
  <Container>
    <Grid container justifyContent='space-evenly'>
      {children}
    </Grid>
  </Container>
)

export default ProductContainer
