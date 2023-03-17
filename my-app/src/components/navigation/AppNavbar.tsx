import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemButton, Drawer } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

import logo from '..\\images\\fenix_logo\\logo_b.png';



const pages: Array<NavLinkProperties> = [
  {
    path: '/',
    label: 'Employees'
  },
  {
    path: '/:id',
    label: 'View Employee'
  },
  {
    path: '/:id/view',
    label: 'View Employee 2'
  },
  {
    path: '/:id/edit',
    label: 'Edit Employee'
  },
  {
    path: '/:id/delete',
    label: 'Delete'
  },
  {
    path: '/:id/add',
    label: 'Add New'
  }
];



export interface NavLinkProperties {
  path: string,
  label: string
}


const goStart = () => {
  window.location.href = '/cms/logowanie.php';
}

const NavLink = (props: NavLinkProperties) => {
  const { path, label } = props;
  return (
    <Link to={path}>
      <ListItem disablePadding>
        <ListItemButton>

          <Typography
            component='span'
            color={'initial'}
            sx={{ flexGrow: 1, mr: 2 }}>{label}</Typography>

        </ListItemButton>
      </ListItem >
    </Link>

  );
}


function AppNavbar() {

  const [navbarOpen, setNavbarOpen] = useState(false);


  const list = () => (
    <Box
      width={'auto'}
      role="presentation"
      onClick={() => setNavbarOpen(false)}
      onKeyDown={() => setNavbarOpen(false)}
    >
      <List>
        {pages.map((page, index) => (
          page.path !== '*' ?
            <NavLink
              key={uuidv4()}
              path={page.path}
              label={page.label}
            />
            : null
        ))}
      </List>
    </Box>
  );


  return (
    <Box height={64}>
      <AppBar>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          // onClick={() => setNavbarOpen(true)}
          ><MenuIcon /></IconButton>
          <Typography
            variant='h5'
            component='div'
            color='white'
            sx={{ flexGrow: 1, mr: 2 }}>{'Statystyki'}
          </Typography>

          <Typography
            variant='caption'
            component='div'
            color='white'
            sx={{ flexGrow: 1, mr: 2 }}>{'Strona w trakcie pisania, proszę nie przywiązywać się do wyglądu 😎'}
          </Typography>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='logo fenix'
            sx={{ mr: -1, pl: 2, pr: 2 }}
            onClick={() => goStart()}
          ><img src={logo} alt="Logo fenix"
            width='24px' /></IconButton>
          <Drawer
            anchor={'left'}
            open={navbarOpen}
            onClose={() => setNavbarOpen(false)}
          >
            {list()}
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box >
  )
}

export default AppNavbar;