import React from "react";
import Link from "@mui/material/Link";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'


const navigationLinks = [
  { name: "About", href: "" },
  { name: "Projects", href: "" },
  { name: "Resume", href: "" },
];

const Header = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="md">
      <Toolbar disableGutters>
        <Avatar
        sx={{
          mr:"auto",
          color: "white",
          background: "orange",
        }}
        >C</Avatar>
      {navigationLinks.map((link) => (
        <Link color="textPrimary" variant="button" underline="none" href={link.href}
        sx={{
          mr:5,
        }}
        >{link.name}</Link>
      ))}
      </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
