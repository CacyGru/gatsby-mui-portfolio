import React, { useState } from 'react';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const navigationLinks = [
  { name: 'About', href: '' },
  { name: 'Projects', href: '' },
  { name: 'Resume', href: '' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Avatar
            sx={{
              mr: 'auto',
              color: 'white',
              background: 'orange',
            }}
          >
            C
          </Avatar>
          <Box
            sx={{
              display: { md: 'block', xs: 'none' },
            }}
          >
            {navigationLinks.map((link) => (
              <Link
                color="textPrimary"
                variant="button"
                underline="none"
                href={link.href}
                sx={{
                  mr: 5,
                }}
              >
                {link.name}
              </Link>
            ))}
          </Box>
          <Box
            sx={{
              display: { md: 'none', xs: 'block' },
            }}
          >
            <IconButton>
              <MenuIcon onClick={() => setOpen(true)} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
      <SwipeableDrawer
        open={open}
        onClose={() => setOpen(false)}
        anchor="right"
      >
        <div>
          {' '}
          <IconButton>
            <ChevronRightIcon onClick={() => setOpen(false)} />
          </IconButton>
        </div>
        <Divider />
        <Box
          sx={{
            display: { md: 'none', xs: 'block' },
          }}
        >
          <List>
            {navigationLinks.map((link) => (
              <ListItem>
                <Link
                  color="textPrimary"
                  variant="button"
                  underline="none"
                  href={link.href}
                  sx={{
                    mr: 5,
                  }}
                >
                  {link.name}
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </SwipeableDrawer>
    </AppBar>
  );
};

export default Header;
