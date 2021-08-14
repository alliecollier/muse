import React from 'react';
import Navbar from './components/Navbar';
import Routes from './Routes';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/ThemeProvider';

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes />
      </ThemeProvider>
    </div>
  )
}

export default App
