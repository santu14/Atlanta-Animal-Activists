import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { orange } from '@material-ui/core/colors';
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
  withStyles
} from "@material-ui/core/styles";

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
    color: theme.palette.getContrastText(orange[700]),
    backgroundColor: orange[300],
    '&:hover': {
      backgroundColor: orange[400],
    },
  },
}))(Button);


const SignIn = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Typography component="h1" variant="h5" className="text-center">
        Sign In
      </Typography>
      <form className={classes.form} noValidate>
        <ThemeProvider theme={theme}>
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
            autoComplete="current-password"
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

export default SignIn;
