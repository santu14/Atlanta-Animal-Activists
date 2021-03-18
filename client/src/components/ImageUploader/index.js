import React, { useState, useEffect } from "react";
import UploadBox from "./UploadBox";
import { Grid } from "@material-ui/core";
import useStyles from "../Styles";
import Keys from "../../utils/keys";
import { uploadFile } from "react-s3";
import API from "../../utils/API"

const ImageUploader = () => {
  const classes = useStyles();

  const accessKey =  Keys.access;
  const secretKey =  Keys.secret;

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
  const [imgURLState, setImgURLState] = useState(initialImgURLState);
  const [imgNameState, setImgNameState] = useState(initialImgNameState);

  useEffect(() => {
    console.log(imgURLState, imgNameState);
  }, [imgURLState, imgNameState]);
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

    let { file } = imgURLState.[imgname];
    let { name } = imgNameState.[imgname];
   
    // upload to s-3 bucket
    if(file && name){

      uploadFile(file, config)
        .then((data) => {
        //  save to db
          API.uploadImg({url: data.location, name: name, location: imgname }).then(()=>{
            console.log("Saved!");
          })
        })
        .catch((err) => console.error(err));
        
    } else {
      return
    }
  };

  return (
    <div>
      <Grid item xs={12} className={classes.imgboxContainer} container>
        <Grid item xs={6} sm={3}>
          <div className={classes.paper}>
            <UploadBox
              imgURL={imgURLState.img1.url || "https://via.placeholder.com/250"}
              imgName={imgNameState.img1.name}
              handleImgChange={handleImgChange}
              handleNameChange={handleNameChange}
              submitHandler={submitHandler}
              currentBox={"img1"}
              // had to make the upload button ID a prop that changes as it kept rejectiong other props due to it being an ID
              currentId={"icon-button-file1"}
            />
          </div>
        </Grid>
        <Grid item xs={6} sm={3}>
          <div className={classes.paper}>
            <UploadBox
              imgURL={imgURLState.img2.url || "https://via.placeholder.com/250"}
              imgName={imgNameState.img2.name}
              handleImgChange={handleImgChange}
              handleNameChange={handleNameChange}
              submitHandler={submitHandler}
              currentBox={"img2"}
              // had to make the upload button ID a prop that changes as it kept rejectiong other props due to it being an ID
              currentId={"icon-button-file2"}
            />
          </div>
        </Grid>
        <Grid item xs={6} sm={3}>
          <div className={classes.paper}>
            <UploadBox
              imgURL={imgURLState.img3.url || "https://via.placeholder.com/250"}
              imgName={imgNameState.img3.name}
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
    </div>
  );
};

export default ImageUploader;
