import React from "react";
import { Paper, Button, Container } from "@material-ui/core";
import useStyles from "../Styles";
const ImgHolder = (props) => {
  const classes = useStyles();
  return (
    <Container>
      <Paper variant="outlined" className={classes.galleryImgCard} square>
        <img src={props.imgurl} className={classes.galleryImgDisplay} alt="img" />
        <div className={classes.imgTextDiv}>

          <h3 className={classes.imgText}>{props.imgname}</h3>
        </div>
      </Paper>
    </Container>
  );
};

export default ImgHolder;
