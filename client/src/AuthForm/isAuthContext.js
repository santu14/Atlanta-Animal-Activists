import { fade } from "@material-ui/core";
import React, { useState, createContext, useEffect } from "react";
import API from '../utils/API'

const AuthState = ({ children }) => {
 
const [isAuth, setIsAuth] = useState('')
useEffect(() => {
  checkAuth()
  
}, [])

const checkAuth = () => {
  try{
    API.checkAuth().then((res) => {
      
      if(res.data.isAuth){
        setIsAuth(true)
      } else {
        setIsAuth(false)
      }
    })
  } catch (err) {
    setIsAuth(false)
  }
  
    
}
  return (
    <IsAuthContext.Provider value={[isAuth, setIsAuth]}>
      {children}
    </IsAuthContext.Provider>
  );
};
export const IsAuthContext = createContext();
export default AuthState;
