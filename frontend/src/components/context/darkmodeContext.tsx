import { createContext } from 'react'

// TypeScript interface for dark mode context
interface DarkModeContextType {
    isDarkMode: boolean
    toggleDarkMode: () => void
}

// Create dark mode context - provides theme state across the app
export const DarkModeContext = createContext<DarkModeContextType>(undefined!)
