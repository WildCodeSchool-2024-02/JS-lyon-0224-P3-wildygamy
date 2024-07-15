import { createContext, useContext, useMemo } from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/UseLocalStorage";

const UserContext = createContext();

export function UserProvider({ children }) {
  const ApiUrl = import.meta.VITE_API_URL;
  const navigate = useNavigate();

  const [user, setUser] = useLocalStorage("admin", null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = async (sessionExpired) => {
    try {
        const response = await fetch(`${ApiUrl}/user/logout`,{
            credentials :"include",
            headers : {
                "Content-Type" : 'application/json',
            },
        });
        if(response.status === 200){
            setUser(null);
            navigate(sessionExpired === true ? '/connection' : '/');
        }
    }
   catch (err) {
  console.error(err)
  }

};

const memo  = useMemo (
    () => ({ user, setUser, login, logout}),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user]
);
return <UserContext.Provider value={memo}> {children} </UserContext.Provider>;

}

UserProvider.propTypes = {
    children : PropTypes.node.isRequired,
};

export const useUserContext = () => useContext(UserContext);



