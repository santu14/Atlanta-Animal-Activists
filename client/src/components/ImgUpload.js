import React, { useState } from "react";
import { Paper, Button } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import useStyles from "./Styles";

const ImgUpload = () => {
  let initialImgState = {
    url: "",
    name: "",
  };
  const [imgState, setImgState] = useState(initialImgState);
  const classes = useStyles();
  const handleImgChange = (e) => {
    console.log(e.target.files[0]);
    setImgState({
      name: e.target.files[0].name,
      url: URL.createObjectURL(e.target.files[0]),
    });
  };
  return (
    <div>
      <Paper variant="outlined" className={classes.imgCard} square>
        <img src={imgState.url} className={classes.imgDisplay} alt="img" />
      </Paper>
      <input
        accept="text"
        defaultValue={imgState.name}
        className={classes.imgName}
        type="text"
      />
      <div>
        <input
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImgChange}
          id="icon-button-file"
          type="file"
        />
        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera />
          </IconButton>
        </label>
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </div>
    </div>
  );
};

export default ImgUpload;
