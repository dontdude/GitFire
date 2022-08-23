//AuthState is the context provider which provides state value to all the requesting component

import React, { useState } from 'react'
import AuthContext from "./AuthContext.js";

const AuthState = (props) => {

  const [user, setUser] = useState(null);     //user is authenticated or not

  //props.children here will be : <Header /> <Component {...pageProps} /> <Footer />, see _app.js
  return (
    <AuthContext.Provider value={{user, setUser}}>       
        {props.children}
    </AuthContext.Provider>
  )
}
//values are states, available to all those component wrapped with context provider

export default AuthState;