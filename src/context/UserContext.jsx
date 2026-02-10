import { createContext, useContext, useState, useEffect } from "react";
import { getSession, setSession, clearSession } from "../utils/methods";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUserState] = useState(null);

    useEffect(() => {
        const sessionUser = getSession();
        if (sessionUser) {
            setUserState(sessionUser);
        }
    }, []);

    const login = (userData) => {
        setSession(userData);
        setUserState(userData);
    };

    const logout = () => {
        clearSession();
        setUserState(null);
    };

    const updateUserContext = (updatedData) => {
        const newUser = { ...user, ...updatedData };
        setSession(newUser);
        setUserState(newUser);
    }

    return (
        <UserContext.Provider value={{ user, login, logout, updateUserContext }}>
            {children}
        </UserContext.Provider>
    );
};

export const userAuth = () => {
    return useContext(UserContext);
};