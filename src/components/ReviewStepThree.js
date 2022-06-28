import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const ReviewStepThree = ({ closeModal }) => {
  return (
    <Box>
      <Typography variant='h4' component='h5'>
        Thanks for the Purchase
      </Typography>
      <Button
        LinkComponent={Link}
        onClick={closeModal}
        variant='contained'
        to='/user/profile'
      >
        Profile
      </Button>
    </Box>
  )
}

export default ReviewStepThree
