import React from "react";
import Modal from "@material-ui/core/Modal";
import { Paper, Button, Fade} from "@material-ui/core";
import AuthForm from "../AuthForm";
import useStyles from "./Styles";

const AdminButton = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = (e) => {
    
    setOpen(true);
  };

  const handleClose = (e) => {
    
    setOpen(false);
  };

  const body = (
    <Fade in={open}>
      <Paper className={classes.adminModal}>
        <AuthForm onSub={handleClose} />
      </Paper>
    </Fade>
  );
  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Admin Login
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default AdminButton;
