import { Button, Grid } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import ReviewPurchase from '../layout/ReviewPurchase'

const FooterDataBtn = ({ handleOpen, handleClose, open }) => {
  const reviewList = useSelector(state => state.review)
  return (
    <Grid container justifyContent='center'>
      <Grid item>
        <Button
          variant='text'
          color='info'
          onClick={handleOpen}
          disabled={reviewList.length < 1}
        >
          Review Order
        </Button>
        <ReviewPurchase handleClose={handleClose} open={open} />
      </Grid>
    </Grid>
  )
}

export default FooterDataBtn
