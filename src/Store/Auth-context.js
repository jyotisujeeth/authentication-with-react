import React ,{ useState } from "react";

const AuthContext = React.createContext({
    token:"",
    isLoggedIn:false,
    login:(token) => {},
    logout:()=> {},
});

export const AuthContextProvider = (props) =>{
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);

    const userIsLoggedIn = !!token;

    const LoginHandler =(token) => {
        localStorage.setItem('token', token);
        setToken(token);
    };

    const logoutHandler =() => {
        setToken(null);
        localStorage.removeItem('token');
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