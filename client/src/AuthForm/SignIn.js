import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

import Typography from "@material-ui/core/Typography";

const SignIn = (props) => {
  return (
    <div>
      <Typography variant="h5">Sign In</Typography>
      <form noValidate>
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

        <Button
          color="primary"
          type="submit"
          fullWidth
          variant="contained"
          onClick={props.submit}
        >
          Sign In
        </Button>
        <Link variant="body2" name="signUp" onClick={props.switch}>
          {"Don't have an account? Sign Up"}
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
