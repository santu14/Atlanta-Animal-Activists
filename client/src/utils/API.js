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

  getImgs: () => {
    return axios.get("/api/getimgs").then( data => {
      console.log(data);
      return data
    })
  },

  uploadImg: (url)=> {
    return axios.post("/api/upload", url).then((data) => {
      console.log(data);
      return data
    });
  },
  
  updateImg: (id, url)=> {
    return axios.post("/api/update" + id, url).then((data) => {
      console.log(data);
      return data
    });
  }

};
