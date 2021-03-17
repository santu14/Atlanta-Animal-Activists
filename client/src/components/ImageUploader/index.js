import React, { useState, useEffect } from "react";
import UploadBox from "./UploadBox";
import { Grid,} from "@material-ui/core";
import useStyles from "../Styles";

const ImageUploader = () => {
  const classes = useStyles();
  let initialImgURLState = {
    img1: {
      url: ""
    },
    img2: {
      url: ""
    },
    img3: {
      url: ""
    },
    img4: {
      url: ""
    },
    img5: {
      url: ""
    },
    img6: {
      url: ""
    },
    img7: {
      url: ""
    },
    img8: {
      url: ""
    },
    img9: {
      url: ""
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
  }
  const [imgURLState, setImgURLState] = useState(initialImgURLState);
  const [imgNameState, setImgNameState] = useState(initialImgNameState);

 useEffect(() => {
   console.log(imgURLState, imgNameState);
 }, [imgURLState, imgNameState])
  const handleImgChange = ({ target: { name, files } }) => {
    console.log(files[0], name);
    setImgURLState({ ...imgURLState,
      [name]: {
        url: URL.createObjectURL(files[0]),
      }
    });
   
    setImgNameState({ ...imgNameState,
      [name]: {
        name: files[0].name,
      }
    });
    
  };
  const handleNameChange = ({ target: {name, value} }) => {
    setImgNameState({ ...imgNameState,
      [name]: {
        name: value,
      }
    });
    
  }
  const submitHandler = ({ target: { parentNode } }) => {
    
    console.log("parent: ",parentNode.name);
    
  };

  return (
    <div>

      <Grid item xs={12} className={classes.imgboxContainer}  container>
        <Grid item xs={6} sm={3}>
          <div className={classes.paper}>
            <UploadBox
              imgURL={imgURLState.img1.url || "https://via.placeholder.com/250"}
              imgName={imgNameState.img1.name}
              handleImgChange={handleImgChange}
              handleNameChange={handleNameChange}
              submitHandler={submitHandler}
              currentBox={"img1"}
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
              currentId={"icon-button-file3"}

            />
          </div>
        </Grid>
      </Grid>
      
    </div>
      
  
  );
};

export default ImageUploader;
