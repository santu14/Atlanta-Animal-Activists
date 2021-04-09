import React, { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import ImgHolder from "./ImgHolder";
import API from "../../utils/API";

import { Typography, Grid, Paper, Hidden, } from "@material-ui/core";
import useStyles from "../../components/Styles";
const Gallery = () => {
  const classes = useStyles();
  let initialCurrentImgState = [
    { url: "", name: "" },
    { url: "", name: "" },
    { url: "", name: "" },
    { url: "", name: "" },
    { url: "", name: "" },
    { url: "", name: "" },
    { url: "", name: "" },
    { url: "", name: "" },
    { url: "", name: "" },
  ];
  const [currentImgs, setCurrentImgs] = useState(initialCurrentImgState);
  useEffect(() => {
    // get all images and set to current
    API.getAllImgs().then(({ data }) => {
      console.log("all imgs: ", data);
      setCurrentImgs(data);
    });
  }, []);
  return (
    <div>
      <Grid item xs={12} container className={classes.galleryCont} >
        <Grid item xs={5} md={5} />
        <Grid item xs={7} md={6} className={classes.galleryLine} />
        <Grid item xs={0} md={1} >
          <div className={classes.galleryLine2}></div>
        </Grid>
        <Grid item xs={12} container className={classes.galleryCont2} >
          <Grid item xs={3} md={4} />
          <Grid item xs={6}md={4} >
            <Paper className={classes.galleryPaper} >
              <Typography className={classes.galleryTitle}>
                Gallery
                        </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}md={3}  />
          <Grid item xs={0}md={1}  >
            <div className={classes.galleryLine2}></div>
          </Grid>
          <Grid item xs={0}md={1}  style={{ backgroundColor: "#212223" }} />
          <Grid item xs={12} md={10} container >
            <div className={classes.galleryPaper2}>
              <Carousel >
                {currentImgs.map((img, i) => (
                  <ImgHolder key={i} imgurl={img.url} imgname={img.name} />
                ))}
              </Carousel>
            </div>
          </Grid>
          <Grid item xs={0} md={1}   >
            <div className={classes.galleryLine2}></div>
          </Grid>
        </Grid>

      </Grid>
    </div>
  );
};

export default Gallery;
