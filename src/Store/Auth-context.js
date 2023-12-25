import React ,{ useState } from "react";

const AuthContext = React.createContext({
    token:"",
    isLoggedIn:false,
    login:(token) => {},
    logout:()=> {},
});

export const AuthContextProvider = (props) =>{
    const [token, setToken] = useState(null)

    const userIsLoggedIn = !!token;

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
      logout: logoutHandler
    };

    return (
        <AuthContext.Provide value={contextValue} >
            {props.children}
        </AuthContext.Provide>
    );
};

export default AuthContextProvider;