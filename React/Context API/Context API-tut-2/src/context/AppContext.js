import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [isAuth, setIsAuth] = useState(true);

    const message = "This is context";

    return (
        <AppContext.Provider value={{message, isAuth, setIsAuth}}>
            {children}
        </AppContext.Provider>
    )
};

export default AppProvider;
