import React, { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import ImgHolder from "./ImgHolder";
import API from "../../utils/API";
import { Container } from "@material-ui/core";
const Gallery = () => {
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
    <Container>
      <Carousel>
        {currentImgs.map((img, i) => (
          <ImgHolder key={i} imgurl={img.url} imgname={img.name} />
        ))}
      </Carousel>
    </Container>
  );
};

export default Gallery;
