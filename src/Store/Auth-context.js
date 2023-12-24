import React from "react";

const AuthContext = React.createContext({
    token:"",
    isLoggedIn:false,
    login:(token) => {},
    logout:()=> {},
});

export const AuthContextPrvider = (props) =>{
    const [token, setToken] = UseState(null)

    const userIsLoggedIn = !token;

    const LoginHandler =(token) => {
        setToken(token);
    };

    const logoutHandler =() => {
        setToken(null);
    };

    const contextValue = {
      token: token,
      isLoggedIn: userIsLoggedIn,
      login: LoginHandler,
      logour: logoutHandler
    };

    return (
        <AuthContext.provide value={contextValue} >
            {props.childern}
        </AuthContext.provide>
    );
};

export default AuthContextPrvider;