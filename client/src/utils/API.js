import axios from "axios";

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
  }
};
