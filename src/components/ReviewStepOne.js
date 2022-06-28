import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'

const ReviewStepOne = () => {
  const reviewList = useSelector(state => state.review)
  return (
    <Box>
      <Grid container>
        <Grid item></Grid>
      </Grid>
    </Box>
  )
}

export default ReviewStepOne
