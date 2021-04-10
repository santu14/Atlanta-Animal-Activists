import React from "react";
import { Paper, Button, Container } from "@material-ui/core";
import useStyles from "../Styles";
const ImgHolder = (props) => {
  const classes = useStyles();
  return (
    <>
      <Paper variant="outlined"  square>
        <img
          src={props.imgurl}
          className={classes.galleryImgDisplay}
          alt="img"
        />
      <div className={classes.imgTextDiv}>
        <h3 className={classes.imgText}>{props.imgname}</h3>
      </div>
      </Paper>
    </>
  );
};

export default ImgHolder;
