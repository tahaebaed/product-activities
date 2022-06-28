import { Settings } from '@mui/icons-material'
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material'
import { Box, Container } from '@mui/system'
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
                <Avatar src='aaa' alt={`${user?.name} avatar`} sizes='2rem' />
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
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <Grid container direction='column' mt={10}>
              <Typography variant='h4' component='h5'>
                Purchased Products:
              </Typography>
              {purchased.map(item => (
                <Grid item key={item.purchasedAt}>
                  {item.items.map((prod, index) => (
                    <Card sx={{ minWidth: 275, mb: 3 }}>
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
