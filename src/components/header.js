import React,{useState} from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import {NavLink} from "react-router-dom"
import '../styles/HeaderStyles.css'
import MenuIcon from '@mui/icons-material/Menu';

const   Header = () => {
  const [mobileOpen,setmobileOpen]=useState(false)
  //handle menu click
  const handleDrawerToggle=()=>{
    setmobileOpen(!mobileOpen)
  }
  //menu drawer
  const drawer=(
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
      <Typography variant='h6' component="div" sx={{flexGrow:1, my:2}}>
            <RestaurantIcon/>Balu's Restaurant
          </Typography>
            <ul className='mobile-navigation'>
              <li>
                <NavLink activeClassName='active' to={'/'}>Home</NavLink>
              </li>
              <li>
                <NavLink to={'/menu'}>Menu</NavLink>
              </li>
              <li>
                <NavLink to={'/about'}>About</NavLink>
              </li>
              <li>
                <NavLink to={'/contact'}>Contact</NavLink>
              </li>
            </ul>
          </Box>
  )
  return (
    <div>
      <Box>
        <AppBar component={"nav"} sx={{bgcolor:"black"}}>
          <Toolbar>
          <IconButton color='inherit' aria-label='open-drawer' edge='start' sx={{mr:2,
          display:{sm:'none'},"& MuiDrawer-paper":{
            boxSizing:'border-box',
            width:'240px',
          }}}
          onClick={handleDrawerToggle}>
          <MenuIcon/>
          </IconButton>
          <Typography variant='h6' component="div" sx={{flexGrow:1}}>
            <RestaurantIcon/>Balu's Restaurant
          </Typography>
          <Divider/>
          <Box sx={{display:{xs:'none',sm:'block'}}}>
            <ul className='navigation-menu'>
              <li>
                <NavLink activeClassName="active" to={'/'}>Home</NavLink>
              </li>
              <li>
                <NavLink to={'/menu'}>Menu</NavLink>
              </li>
              <li>
                <NavLink to={'/about'}>About</NavLink>
              </li>
              <li>
                <NavLink to={'/contact'}>Contact</NavLink>
              </li>
            </ul>
          </Box>
          </Toolbar>
        </AppBar>
      </Box>
        <Box component='nav'>
          <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle}
          sx={{display:{xs:'block',sm:'none'}}}>
            {drawer}
          </Drawer>
        </Box>
        <Box><Toolbar/></Box>
       
    </div>
  )
}

export default Header
