import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import BasicTabs from './TabPanel';

const theme=createTheme({

  // Theme settings
  palette:{
    mode: 'dark',
    background: {default: '#282c34'}
  },
  typography: {
    h1: {
      fontSize: 50,
      margin: 24
    }
  }
});


function App() {
  return (
    <Box className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <BasicTabs/>
      </ThemeProvider>
    </Box>
  );
}

export default App;
