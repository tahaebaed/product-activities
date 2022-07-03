import { Settings } from '@mui/icons-material'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import Box from '@mui/system/Box'
import Container from '@mui/system/Container'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Profile = () => {
  const user = useSelector(state => state.user)
  const purchased = useSelector(state => state.purchased)

  return (
    <Container>
      <Grid container justifyContent='space-evenly'>
        <Grid item>
          <Box>
            <Grid
              container
              alignItems='center'
              justifyContent='center'
              spacing={2}
              sx={{ mt: 2 }}
            >
              <Grid item>
                <Avatar
                  src={user.avatar}
                  alt={`${user?.name} avatar`}
                  sx={{ objectFit: 'contain' }}
                />
              </Grid>
              <Grid item>
                <Typography variant='h5'>
                  {user?.name || 'Taha Ebaed'}
                </Typography>
              </Grid>
              <Grid item textAlign='end'>
                <Tooltip title='Edit Profile'>
                  <IconButton
                    LinkComponent={Link}
                    to='/user/edit'
                    variant='contained'
                  >
                    <Settings />
                  </IconButton>
                </Tooltip>
              </Grid>

              <Grid container direction='column' alignSelf='flex-start'>
                <Typography variant='h5' sx={{ mt: 2 }}>
                  about
                </Typography>
                <Grid item>
                  <Typography> age: {user?.age || 27}</Typography>
                </Grid>
                <Grid item>
                  <Typography> Phone: {user?.phone}</Typography>
                </Grid>
                <Grid item>
                  <Typography> email: {user?.email}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Grid container direction='column' mt={10}>
              <Typography variant='h4' component='h5'>
                Purchased Products:
              </Typography>
              {purchased.length < 1 && (
                <Typography variant='h5' mt={5} component='h5'>
                  You didn't purchase any Item yet
                </Typography>
              )}
              {purchased.map((item, index) => (
                <Grid item key={index}>
                  {item.items.map((prod, index) => (
                    <Card sx={{ minWidth: 275, mb: 3 }} key={index}>
                      <CardContent>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color='text.secondary'
                          gutterBottom
                        >
                          amount: {prod.amount}
                        </Typography>
                        <Typography variant='h5' component='div'>
                          name: {prod.name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                          paid: {prod.price * prod.amount}$
                        </Typography>
                        <Typography variant='body2'>
                          Purchased at: {item.purchasedAt}
                        </Typography>
                        <Typography variant='body2'>
                          address: {item.details.address}
                        </Typography>
                      </CardContent>
                    </Card>
                  ))}
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Profile
