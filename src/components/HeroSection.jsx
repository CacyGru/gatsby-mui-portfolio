import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Social from './Social';

const HeroSection = () => {
  return (
    <Container maxWidth="md" height="100%">
      <Box
        sx={{
          height: '90vh',

          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          height="100%"
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
              <Button href="/" color="secondary" variant="outlined">
                - Click Me -
              </Button>
            </Box>
          </Grid>
          <Grid>
            <Social />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HeroSection;
