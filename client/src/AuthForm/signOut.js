import React from "react";
import Button from "@material-ui/core/Button";

const signOut = (props) => {
  return (
    <div>
      <Button
        color="primary"
        type="submit"
        fullWidth
        variant="contained"
        onClick={props.submit}
      >
        Sign out
      </Button>
    </div>
  );
};

export default signOut;
