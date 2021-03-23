import React from "react";
import { Paper, Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import useStyles from "../Styles";

const ImgUpload = (props) => {
  const classes = useStyles();
  
  return (
    <div name={props.currentBox} newnew={props.currentBox}>
      <Paper variant="outlined" className={classes.imgCard} square>
        <img src={props.imgURL} className={classes.imgDisplay} alt="img" />
      </Paper>
      <input
        name={props.currentBox}
        accept="text"
        defaultValue={props.imgName}
        className={classes.imgName}
        onChange={props.handleNameChange}
        type="text"
      />
      <div>
        <input
          name={props.currentBox}
          accept="image/*"
          style={{ display: "none" }}
          onChange={props.handleImgChange}
          id={props.currentId}
          type="file"
        />
        <label htmlFor={props.currentId}>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera />
          </IconButton>
        </label>
        <Button
          name={props.currentBox}
          onClick={props.submitHandler}
          variant="contained"
          color="primary"
        >
          Upload
        </Button>
      </div>
    </div>
  );
};

export default ImgUpload;
