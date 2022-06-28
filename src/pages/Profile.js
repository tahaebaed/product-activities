import { Settings } from '@mui/icons-material'
import { Avatar, Grid, IconButton, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const user = useSelector(state => state.user)

  return (
    <Container>
      <Box>
        <Grid
          container
          alignItems='center'
          justifyContent='center'
          spacing={2}
          sx={{ mt: 2 }}
        >
          <Grid item>
            <Avatar src='aaa' alt={`${user?.name} avatar`} sizes='2rem' />
          </Grid>
          <Grid item>
            <Typography variant='h5'>{user?.name}</Typography>
          </Grid>
          <Grid item textAlign='end'>
            <IconButton variant='contained'>
              <Settings />
            </IconButton>
          </Grid>

          <Grid container direction='column' alignSelf='flex-start'>
            <Typography variant='h5' sx={{ mt: 2 }}>
              about
            </Typography>
            <Grid item>
              <Typography> age: {user?.age}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Profile
