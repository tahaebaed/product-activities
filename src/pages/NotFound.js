import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Container from '@mui/system/Container'
import React from 'react'

const NotFound = () => {
  return (
    <Container>
      <Grid
        container
        alignItems='center'
        justifyContent='center'
        direction='column'
        mt={15}
      >
        <Grid item>
          <Typography variant='h2' component='h2' color='lightskyblue'>
            404
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='h5' component='h5'>
            This Page Were Not Found
          </Typography>
        </Grid>
        <Grid item>
          <Button con>404</Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default NotFound
