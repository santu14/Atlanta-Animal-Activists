import React from "react";
import Button from "@material-ui/core/Button";
import API from '../utils/API'

const signOut = () => {
  const submitSignOut = (e) => {
    e.preventDefault();
    API.signOut().then((res) => {
        console.log(res);
        
    })
}
  return (
    
      <Button
        color="primary"
        type="submit"
        
        variant="contained"
        onClick={submitSignOut}
      >
        Sign out
      </Button>
   
  );
};

export default signOut;
