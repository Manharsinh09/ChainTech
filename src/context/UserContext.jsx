import { createContext, useContext, useState } from "react";


export const UserContext = createContext();

export const UserProvider =  ({ children }) => {

    const [user,setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export const userAuth = () => {
    const context = useContext(UserContext);
    return context;
}