import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Gets all users
  signUp: (userData) => {
    return axios.post("/api/signup", userData).then((data) => {
      console.log(data);
      return data

    });
  },
  signIn: (userData) => {
    return axios.post("/api/signin", userData).then((data) => {
      console.log(data);
      return data
    });
  },
  signOut: () => {
    return axios.get("/api/signout");
  },
  checkAuth: () => {
    return axios.get("/api/checkauth");
  },

  // --------------- Gallery Uploader API ---------------------
  getOneImg: (data) => {
    return axios.post("/api/findOneImg", data).then( data => {
      console.log(data);
      return data
    })
  },
  getAllImgs: () => {
    return axios.get("/api/findAllImgs").then( data => {
      console.log(data);
      return data
    })
  },
  uploadImg: (data)=> {
    return axios.post("/api/uploadImg", data).then((data) => {
      console.log(data);
      return data
    });
  },

  updateImg: (id, url)=> {
    return axios.post("/api/updateImg/" + id, url).then((data) => {
      console.log(data);
      return data
    });
  },
    // --------------- Event Uploader API ---------------------

    getAbllEvents: () => {
      return axios.get("/api/getAllEvents").then( data => {
        console.log(data);
        return data
      })
    },
    uploadEvent: (data)=> {
      return axios.post("/api/uploadEvent", data).then((data) => {
        console.log(data);
        return data
      });
    },
};
