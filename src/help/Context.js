import React, { createContext, useState } from "react";

export const Context = createContext()

export default function ContextProvider({ children }) {
    const [dropdown, setDropdown] = useState(false);
    const [refresh, setrefresh] = useState(false);
    const value = {
        dropdown,
        setDropdown,
        refresh,
        setrefresh
    };
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}