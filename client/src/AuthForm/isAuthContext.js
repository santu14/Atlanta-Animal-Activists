import { fade } from "@material-ui/core";
import React, { useState, createContext, useEffect, useReducer } from "react";
import API from '../utils/API'
import isAuthReducer from '../reducers/isAuthReducer'

const AuthState = ({ children }) => {
 
const [state, dispatch] = useReducer(isAuthReducer, {isAuth: false})


  return (
    <IsAuthContext.Provider value={[state, dispatch]}>
      {children}
    </IsAuthContext.Provider>
  );
};
export const IsAuthContext = createContext();
export default AuthState;
