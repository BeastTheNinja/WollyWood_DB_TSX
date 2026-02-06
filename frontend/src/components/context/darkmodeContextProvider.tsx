import { useState, type ReactNode } from "react"
import { DarkModeContext } from "./darkmodeContext"

// Dark Mode Provider - manages theme state for the entire app
export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
    // In-memory theme state (not persisted)
    const [isDarkMode, setIsDarkMode] = useState(false)

    // Toggle between light and dark mode
    const toggleDarkMode = () => {
        setIsDarkMode(prev => !prev)
    }

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}