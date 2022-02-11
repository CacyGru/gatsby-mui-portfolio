import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Social from './Social';
import Zoom from '@mui/material/Zoom';

const HeroSection = () => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Box
      sx={{
        height: '90vh',
        width: '100%',
        backgroundImage: 'url(https://source.unsplash.com/random/?universe)',
        position: 'absolute',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        zIndex: '-1',
        '&:before': {
          position: 'absolute',
          width: '100%',
          height: '100%',
          content: '""',
          display: 'block',
          background: 'rgba(0,0,0,0.8)',
          opacity: '0.6',
        },
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          height: '100%',
          color: 'primary',
        }}
      >
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          height="100%"
        >
          <Zoom
            in={checked}
            style={{ transitionDelay: checked ? '500ms' : '0ms' }}
          >
            <Grid item sm={8}>
              <Typography variant="h2" component="h1">
                Calm Music
              </Typography>
              <Typography variant="h4" component="h2">
                Best calm music for you!
              </Typography>
              <Box
                sx={{
                  my: 3,
                }}
              >
                <Button href="/" variant="outlined" color="secondary">
                  - Click Me -
                </Button>
              </Box>
            </Grid>
          </Zoom>
          <Grid item sx={{ display: { md: 'block', xs: 'none' } }}>
            <Social direction="column" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
