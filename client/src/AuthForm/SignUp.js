import React from 'react';
import { TextField, Button,Typography } from "@material-ui/core";


const SignUp = (props) => {
 
  return (
    <div>
      <Typography component="h1" variant="h5" className="text-center">
        Sign Up
      </Typography>
      <form noValidate>
       
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


        <Button
          color="primary"
          type="submit"
          fullWidth
          variant="contained"
          onClick={props.submit}
        >
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
