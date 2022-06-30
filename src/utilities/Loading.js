import { CircularProgress, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Loading = () => {
  return (
    <Box>
      <Grid container justifyContent='center' mt='7rem'>
        <Grid item>
          <CircularProgress size='4rem' />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Loading
