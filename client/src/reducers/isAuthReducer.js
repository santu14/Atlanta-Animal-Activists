import React, { useReducer } from "react";

const isAuthReducer = (state, action) => {
  switch (action.type) {
    case "UNAUTHORIZED":
        state.isAuth = false

    case "AUTHORIZED":
        state.isAuth = true

    default:
      return state
  }
};

export default isAuthReducer;
