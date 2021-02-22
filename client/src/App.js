import "./App.css";
import React from "react";
import Nav from "./components/Header";
import { ThemeProvider, Grid, Paper } from "@material-ui/core";
import theme from "./components/Theme";
import useStyles from "./components/Styles";
import AuthForm from "./AuthForm";
import AuthState from "./AuthForm/isAuthContext";
function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AuthState>
          <Grid container direction="column" spacing={3} xs={12}>
            {/* nav container */}
            <Nav />

            {/* tagline container */}
            <Grid item xs={12} container>
              <Grid item xs={0} sm={2} />
              <Grid item xs={12} sm={8}>
                <Paper className={classes.paper}>tagline test</Paper>
              </Grid>
              <Grid item xs={0} sm={2} />
            </Grid>
            {/* content container */}
            <Grid item xs={12} container>
              <Grid item xs={0} sm={2} />
              <Grid item xs={6} sm={3}>
                <Paper className={classes.paper}>img test</Paper>
              </Grid>
              <Grid item xs={6} sm={5}>
                <Paper className={classes.paper}>content test</Paper>
              </Grid>
              <Grid item xs={0} sm={2} />
            </Grid>
            {/* auth form container */}
            <Grid item xs={12} container>
              <Grid item xs={0} sm={2} md={3} lr={4} />
              <Grid item xs={12} sm={8} md={6} lr={4}>
                <Paper className={classes.paper}>
                  
                  <AuthForm />
                </Paper>
              </Grid>
              <Grid item xs={0} sm={2} md={3} lr={4} />
            </Grid>
          </Grid>
        </AuthState>
      </ThemeProvider>
    </div>
  );
}

export default App;
