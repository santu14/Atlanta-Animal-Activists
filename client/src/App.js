
import './App.css';
import React from 'react';
import Nav from './components/Header';
import { ThemeProvider, Grid, Paper } from '@material-ui/core';
import theme from './components/Theme';
import useStyles from './components/Styles';
import AuthForm from './AuthForm'

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme} >
      <Grid container direction='column' spacing={3} className='base' >
        <Grid item xs={12}><Nav /></Grid>
        <Grid item xs={12} container className='App'>

          <Grid item xs={0} sm={2} />

          <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>body test</Paper>
          </Grid>

          <Grid item xs={0} sm={2} />


          {/* <AuthForm /> */}

        </Grid>


      </Grid>
    </ThemeProvider>
  );
}

export default App;
