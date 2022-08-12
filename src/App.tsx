import React from 'react';
import './App.css';
import themeOptions from './themes';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from './components/NavBar';
import Header from './components/Header';

const theme = createTheme(themeOptions);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
