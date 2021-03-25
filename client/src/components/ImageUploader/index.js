import React, { useState, useEffect } from "react";
import UploadBox from "./UploadBox";
import { Grid } from "@material-ui/core";
import useStyles from "../Styles";
import Keys from "../../utils/keys";
import { uploadFile } from "react-s3";
import API from "../../utils/API";

const ImageUploader = () => {
  const classes = useStyles();

  const accessKey = Keys.access;
  const secretKey = Keys.secret;

  const config = {
    bucketName: "atl-animal-activists-bucket",
    region: "us-east-1",
    dirName: "photos",
    accessKeyId: accessKey,
    secretAccessKey: secretKey,
  };

  // set two different states for img URL and name to make state management more flexible
  // (cant get name change to not erase current url and cant do duble destructuring to my knoledge, fastest fix for the moment)
  let initialImgURLState = {
    img1: {
      url: "",
      file: "",
    },
    img2: {
      url: "",
      file: "",
    },
    img3: {
      url: "",
      file: "",
    },
    img4: {
      url: "",
      file: "",
    },
    img5: {
      url: "",
      file: "",
    },
    img6: {
      url: "",
      file: "",
    },
    img7: {
      url: "",
      file: "",
    },
    img8: {
      url: "",
      file: "",
    },
    img9: {
      url: "",
      file: "",
    },
  };
  let initialImgNameState = {
    img1: {
      name: "",
    },
    img2: {
      name: "",
    },
    img3: {
      name: "",
    },
    img4: {
      name: "",
    },
    img5: {
      name: "",
    },
    img6: {
      name: "",
    },
    img7: {
      name: "",
    },
    img8: {
      name: "",
    },
    img9: {
      name: "",
    },
  };
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

  const [imgURLState, setImgURLState] = useState(initialImgURLState);
  const [imgNameState, setImgNameState] = useState(initialImgNameState);
  const [currentImgs, setCurrentImgs] = useState(initialCurrentImgState);

  useEffect(() => {
    // get all images and set to current
    API.getAllImgs().then(({ data }) => {
      if (data.length > 0) {
        console.log("all imgs: ", data);
        setCurrentImgs(data);
      } else {
        return;
      }
    });
  }, []);

  // useEffect(() => {
  //   console.log(imgURLState, imgNameState, currentImgs);
  // }, [imgURLState, imgNameState, currentImgs]);
  // ---------------- handle Image change ---------------------
  const handleImgChange = ({ target: { name, files } }) => {
    console.log(files[0], name);
    // here is where the two states get called upon
    setImgURLState({
      ...imgURLState,
      [name]: {
        url: URL.createObjectURL(files[0]),
        file: files[0],
      },
    });
    setImgNameState({
      ...imgNameState,
      [name]: {
        name: files[0].name,
      },
    });
  };
  // ---------------- Handle Image Name change ---------------------

  const handleNameChange = ({ target: { name, value } }) => {
    // here is where I cannot figure out how to duble destructure the URL so it wont get replaced if it were to be a single state component
    setImgNameState({
      ...imgNameState,
      [name]: {
        name: value,
      },
    });
  };
  // ---------------- submit image ---------------------

  const submitHandler = ({ target: { parentNode } }) => {
    console.log("parent: ", parentNode.name);
    const imgname = parentNode.name;

    let { file } = imgURLState[imgname];
    let { name } = imgNameState[imgname];

    // upload to s-3 bucket
    if (file && name) {
      uploadFile(file, config)
        .then((data) => {
          //  save to db
          API.uploadImg({
            url: data.location,
            name: name,
            location: imgname,
          }).then(() => {
            console.log("Saved!");
          });
        })
        .catch((err) => console.error(err));
    } else if (!file && name) {
      // if no img added just change the name
      API.uploadImg({
        name: name,
        location: imgname,
      }).then(() => {
        console.log("Saved!");
      });
    } else {
      return;
    }
  };

  return (
    <div>
      
      <Grid item xs={12} className={classes.imgboxContainer} container>
        
        <Grid item xs={11} sm={4} lg={3}>
          
          <div className={classes.paper}>
          
            <UploadBox
              imgURL={
                imgURLState.img1.url ||
                currentImgs[0].url ||
                "https://via.placeholder.com/300x200"
              }
              imgName={imgNameState.img1.name || currentImgs[0].name}
              handleImgChange={handleImgChange}
              handleNameChange={handleNameChange}
              submitHandler={submitHandler}
              currentBox={"img1"}
              // had to make the upload button ID a prop that changes as it kept rejectiong other props due to it being an ID
              currentId={"icon-button-file1"}
            />
          </div>
        </Grid>
        <Grid item xs={11} sm={4} lg={3}>
          <div className={classes.paper}>
            <UploadBox
              imgURL={
                imgURLState.img2.url ||
                currentImgs[1].url ||
                "https://via.placeholder.com/300x200"
              }
              imgName={imgNameState.img2.name || currentImgs[1].name}
              handleImgChange={handleImgChange}
              handleNameChange={handleNameChange}
              submitHandler={submitHandler}
              currentBox={"img2"}
              // had to make the upload button ID a prop that changes as it kept rejectiong other props due to it being an ID
              currentId={"icon-button-file2"}
            />
          </div>
        </Grid>
        <Grid item xs={11} sm={4} lg={3}>
          <div className={classes.paper}>
            <UploadBox
              imgURL={
                imgURLState.img3.url ||
                currentImgs[2].url ||
                "https://via.placeholder.com/300x200"
              }
              imgName={imgNameState.img3.name || currentImgs[2].name}
              handleNameChange={handleNameChange}
              handleImgChange={handleImgChange}
              submitHandler={submitHandler}
              currentBox={"img3"}
              // had to make the upload button ID a prop that changes as it kept rejectiong other props due to it being an ID
              currentId={"icon-button-file3"}
            />
          </div>
        </Grid>
      </Grid>

      {/* -------------------------- next set of uploaders ------------------------------------------ */}
      <Grid item xs={12} className={classes.imgboxContainer} container>
        <Grid item xs={11} sm={4} lg={3}>
          <div className={classes.paper}>
            {}
            <UploadBox
              imgURL={
                imgURLState.img4.url ||
                currentImgs[3].url ||
                "https://via.placeholder.com/300x200"
              }
              imgName={imgNameState.img4.name || currentImgs[3].name}
              handleImgChange={handleImgChange}
              handleNameChange={handleNameChange}
              submitHandler={submitHandler}
              currentBox={"img4"}
              // had to make the upload button ID a prop that changes as it kept rejectiong other props due to it being an ID
              currentId={"icon-button-file4"}
            />
          </div>
        </Grid>
        <Grid item xs={11} sm={4} lg={3}>
          <div className={classes.paper}>
            <UploadBox
              imgURL={
                imgURLState.img5.url ||
                currentImgs[4].url ||
                "https://via.placeholder.com/300x200"
              }
              imgName={imgNameState.img5.name || currentImgs[4].name}
              handleImgChange={handleImgChange}
              handleNameChange={handleNameChange}
              submitHandler={submitHandler}
              currentBox={"img5"}
              // had to make the upload button ID a prop that changes as it kept rejectiong other props due to it being an ID
              currentId={"icon-button-file5"}
            />
          </div>
        </Grid>
        <Grid item xs={11} sm={4} lg={3}>
          <div className={classes.paper}>
            <UploadBox
              imgURL={
                imgURLState.img6.url ||
                currentImgs[5].url ||
                "https://via.placeholder.com/300x200"
              }
              imgName={imgNameState.img6.name || currentImgs[5].name}
              handleNameChange={handleNameChange}
              handleImgChange={handleImgChange}
              submitHandler={submitHandler}
              currentBox={"img6"}
              // had to make the upload button ID a prop that changes as it kept rejectiong other props due to it being an ID
              currentId={"icon-button-file6"}
            />
          </div>
        </Grid>
      </Grid>
      
      {/* -------------------------- next set of uploaders ------------------------------------------ */}
      <Grid item xs={12}  className={classes.imgboxContainer} container>
        <Grid item xs={11} sm={4} lg={3}>
          <div className={classes.paper}>
            {}
            <UploadBox
              imgURL={
                imgURLState.img7.url ||
                currentImgs[6].url ||
                "https://via.placeholder.com/300x200"
              }
              imgName={imgNameState.img7.name || currentImgs[6].name}
              handleImgChange={handleImgChange}
              handleNameChange={handleNameChange}
              submitHandler={submitHandler}
              currentBox={"img7"}
              // had to make the upload button ID a prop that changes as it kept rejectiong other props due to it being an ID
              currentId={"icon-button-file7"}
            />
          </div>
        </Grid>
        <Grid item xs={11} sm={4} lg={3}>
          <div className={classes.paper}>
            <UploadBox
              imgURL={
                imgURLState.img8.url ||
                currentImgs[7].url ||
                "https://via.placeholder.com/300x200"
              }
              imgName={imgNameState.img8.name || currentImgs[7].name}
              handleImgChange={handleImgChange}
              handleNameChange={handleNameChange}
              submitHandler={submitHandler}
              currentBox={"img8"}
              // had to make the upload button ID a prop that changes as it kept rejectiong other props due to it being an ID
              currentId={"icon-button-file8"}
            />
          </div>
        </Grid>
        <Grid item xs={11} sm={4} lg={3}>
          <div className={classes.paper}>
            <UploadBox
              imgURL={
                imgURLState.img9.url ||
                currentImgs[8].url ||
                "https://via.placeholder.com/300x200"
              }
              imgName={imgNameState.img9.name || currentImgs[8].name}
              handleNameChange={handleNameChange}
              handleImgChange={handleImgChange}
              submitHandler={submitHandler}
              currentBox={"img9"}
              // had to make the upload button ID a prop that changes as it kept rejectiong other props due to it being an ID
              currentId={"icon-button-file9"}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ImageUploader;
