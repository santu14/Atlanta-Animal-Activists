import axios from "axios";

export default {
  // Gets all users
  signUp: function() {
    return axios.post("/api/signup", userData);
  },
  saveUser: function(userData) {
    return axios.post("/api/signin", userData);
  }

};