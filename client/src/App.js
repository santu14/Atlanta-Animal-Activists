
import './App.css';
import React from 'react';
import Nav from './components/Navbar';
import {ThemeProvider, Button, Tooltip, Typography, TextField} from '@material-ui/core';
import theme from './components/Theme';
import AuthForm from './AuthForm'

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className='App'>
      <header className='App-header'>
        <Nav>

        </Nav>
        <br/>
        
        <br/>

        <AuthForm/>
       
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
