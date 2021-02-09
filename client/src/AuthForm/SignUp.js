import React from "react";

import { 
    TextField, 
    Button, 
    Typography, 
    colors 
} from "@material-ui/core";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
  withStyles,
} from "@material-ui/core/styles";

const { orange } = colors;

const useStyles = makeStyles((theme) => ({
  fontcolor: {
    color: "#BB86FC",
    "&:hover": {
      color: "#BB90FF",
    },
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffac47",
    },
    type: "dark",
  },
});

// Custom Button
const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(orange[300]),
    backgroundColor: orange[300],
    "&:hover": {
      backgroundColor: orange[400],
    },
  },
}))(Button);

const SignUp = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Typography component="h1" variant="h5" className="text-center">
        Sign Up
      </Typography>
      <form className={classes.form} noValidate>
        <ThemeProvider theme={theme}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            onChange={props.handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={props.handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={props.handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password_confirmation"
            label="Confirm Password"
            type="password"
            id="confirm-password"
            onChange={props.handleInputChange}
          />
        </ThemeProvider>

        <ColorButton
          color="primary"
          type="submit"
          fullWidth
          variant="contained"
          className={classes.submit}
          onClick={props.submit}
        >
          Sign In
        </ColorButton>
      </form>
    </div>
  );
};

export default SignUp;
