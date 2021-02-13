import React from "react";
import Button from "@material-ui/core/Button";

const signOut = () => {
  return (
    <div>
      <Button
        color="primary"
        type="submit"
        fullWidth
        variant="contained"
        onClick={props.signOut}
      >
        Sign out
      </Button>
    </div>
  );
};

export default signOut;
