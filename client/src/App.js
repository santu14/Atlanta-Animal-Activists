
import './App.css';
import React from 'react';
import Nav from './components/Header';
import { ThemeProvider, Grid } from '@material-ui/core';
import theme from './components/Theme';
import AuthForm from './AuthForm'

function App() {
  return (
    <ThemeProvider theme={theme} >
      <Grid container direction='column' >
        <Grid item ><Nav /></Grid>
        <Grid item container className='App'>

          <Grid item xs={0} sm={2} />
          <Grid item xs={12} sm={8}>
            <AuthForm />
          </Grid>
          <Grid item xs={0} sm={2} />


        </Grid>


      </Grid>
    </ThemeProvider>
  );
}

export default App;
