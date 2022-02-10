import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HeroSection from '../components/HeroSection';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const indexPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <HeroSection />
    </ThemeProvider>
  );
};

export default indexPage;
