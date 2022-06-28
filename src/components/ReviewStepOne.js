import { Button, Grid } from '@mui/material'
import { Box } from '@mui/system'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import { useSelector } from 'react-redux'

const ReviewStepOne = ({ handleNext }) => {
  const reviewList = useSelector(state => state.review)
  const totalPrice =
    reviewList.length > 1 &&
    reviewList.reduce((a, b) => a.price * a.amount + b.price * b.amount)
  return (
    <Box>
      {reviewList.map(prod => (
        <Grid container justifyContent='space-between' mb={3} key={prod.id}>
          <Grid item sm={12} md={12} mb={1}>
            Name: {prod.name}
          </Grid>
          <Grid item sm={12} md={3}>
            Price: {prod.price}&
          </Grid>
          <Grid item sm={12} md={3}>
            Amount: {prod.amount}
          </Grid>
          <Grid item sm={12} md={3}>
            Total: {prod.price * prod.amount}$
          </Grid>
        </Grid>
      ))}
      <Grid container justifyContent='space-between'>
        <Grid item>
          total:
          {totalPrice || reviewList[0]?.price * reviewList[0]?.amount || '0'}
        </Grid>
        <Grid item>
          <Button variant='contained' onClick={handleNext}>
            next
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ReviewStepOne
