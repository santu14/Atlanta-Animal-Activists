import axios from "axios";

export default {
  // Gets all users
  signUp: function(userData) {
    return axios.post("/api/signup", userData).then( (data) => {
        console.log(data);
    });;
  },
  signIn: function(userData) {
    return axios.post("/api/signin", userData).then( (data) => {
        console.log(data);
    });
  }

};