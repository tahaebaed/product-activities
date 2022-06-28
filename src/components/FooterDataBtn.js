import { Button, Grid } from '@mui/material'
import React from 'react'
import ReviewPurchase from '../layout/ReviewPurchase'

const FooterDataBtn = ({ handleOpen, handleClose, open }) => {
  return (
    <Grid container justifyContent='center'>
      <Grid item>
        <Button variant='text' color='info' onClick={handleOpen}>
          Review Order
        </Button>
        <ReviewPurchase handleClose={handleClose} open={open} />
      </Grid>
    </Grid>
  )
}

export default FooterDataBtn
