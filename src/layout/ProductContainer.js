import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const ProductContainer = ({ children }) => (
  <Container>
    <Grid container justifyContent='space-evenly'>
      {children}
    </Grid>
  </Container>
)

export default ProductContainer
