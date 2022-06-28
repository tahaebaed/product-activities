import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import Shop2Icon from '@mui/icons-material/Shop2'
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded'
import { Link, NavLink } from 'react-router-dom'

import '../sass/Navbar.scss'
import { useDispatch, useSelector } from 'react-redux'
import { handleLogOut } from '../store/auth/actions'
import { Badge } from '@mui/material'
import ProductsCart from './ProductsCart'

const Header = () => {
  const NOT_AUTHENTICATED_PAGES = ['login', 'Sign up']
  const AUTHENTICATED_PAGES = ['Products', 'cart']

  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)
  const [anchorCart, setAnchorCart] = useState(null)
  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget)
  }
  const handleOpenCartMenu = event => {
    setAnchorCart(event.currentTarget)
  }

  const handleCloseCartMenu = () => {
    setAnchorCart(null)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const user = useSelector(state => state.user)
  const cartList = useSelector(state => state.products)
  const dispatch = useDispatch()

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Shop2Icon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            P-Activities
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {!user
                ? AUTHENTICATED_PAGES.map(page => (
                    <Link
                      to={`/user/${page}`}
                      className='link-small-screen'
                      key={page}
                    >
                      <MenuItem onClick={handleCloseNavMenu} sx={{ mr: 3 }}>
                        <Typography textAlign='center'>{page}</Typography>
                      </MenuItem>
                    </Link>
                  ))
                : NOT_AUTHENTICATED_PAGES.map(page => (
                    <Link
                      to={`/${page}`}
                      className='link-small-screen'
                      key={page}
                    >
                      <MenuItem onClick={handleCloseNavMenu} sx={{ mr: 3 }}>
                        <Typography textAlign='center'>{page}</Typography>
                      </MenuItem>
                    </Link>
                  ))}
            </Menu>
          </Box>
          <Shop2Icon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

          <NavLink to=''>
            <Typography
              variant='h5'
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              P-Activities
            </Typography>
          </NavLink>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
            }}
          >
            {!user ? (
              <>
                <Link to={`/user/products`} className='link-large-screen'>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign='center'>Products</Typography>
                  </MenuItem>
                </Link>
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title='Open settings'>
                    <IconButton
                      onClick={handleOpenCartMenu}
                      sx={{ p: 0, ml: 2 }}
                    >
                      <Badge badgeContent={cartList.length} color='success'>
                        <AddShoppingCartRoundedIcon />
                      </Badge>
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id='menu-appbar'
                    anchorEl={anchorCart}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorCart)}
                    onClose={handleCloseCartMenu}
                  >
                    <ProductsCart />
                  </Menu>
                </Box>
              </>
            ) : (
              NOT_AUTHENTICATED_PAGES.map(page => (
                <Link to={`/${page}`} className='link-large-screen' key={page}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign='center'>{page}</Typography>
                  </MenuItem>
                </Link>
              ))
            )}
          </Box>

          {!user && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ml: 2 }}>
                  <Avatar alt={`${user?.name} Avatar`} src={user?.Avatar} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <Link to='/user/profile' className='link-small-screen'>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign='center'>Profile</Typography>
                  </MenuItem>
                </Link>
                <Link to='' className='link-small-screen'>
                  <MenuItem
                    onClick={() => {
                      dispatch(handleLogOut())
                      handleCloseUserMenu()
                    }}
                  >
                    <Typography textAlign='center'>Logout</Typography>
                  </MenuItem>
                </Link>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
