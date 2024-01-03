"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext()

const getThemeFromLocal = () => {
    if (typeof window !== "undefined") {
        const value = localStorage.getItem("theme")
        return value || "light"
    }
}

export const ThemeContextProvider = ({ children }) => {

    const [theme, setTheme] = useState(() => getThemeFromLocal())

    const toggle = () => {
        setTheme(theme => theme === "light" ? "dark" : "light")
    }

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])

    return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>
}