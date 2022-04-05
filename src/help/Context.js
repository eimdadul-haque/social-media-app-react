import React, { createContext, useState } from "react";

export const Context = createContext()

export default function ContextProvider({ children }) {
    const [dropdown, setDropdown] = useState(false);
    const [refresh, setrefresh] = useState(false);
    const [PopUpMsg, setPopUpMsg] = useState(false);
    
    const value = {
        dropdown,
        setDropdown,
        refresh,
        setrefresh,
        PopUpMsg,
        setPopUpMsg
    };
    
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}