import { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import type { UserData } from '../../types/userType'

// TypeScript interface for provider props
interface AuthContextProviderInterface {
    children: React.ReactNode
}

// Authentication Context Provider
// Wraps components that need access to user authentication state
// Handles localStorage persistence of user data
export const AuthContextProvider = ({ children }: AuthContextProviderInterface) => {
    const [userData, setUserData] = useState<UserData | null>(null)

    // On component mount, check localStorage for existing user session
    // Parse and restore user data if it exists
    useEffect(() => {
        function getLocalUserState() {
            if (localStorage.getItem('userData')) {
                const json = JSON.parse(localStorage.getItem('userData')!)
                setUserData(json)
            }
        }
        getLocalUserState()
    }, [])

    // Save user data to localStorage whenever it changes
    // Enables persistent sessions across page refreshes
    useEffect(() => {
        if (userData !== null) localStorage.setItem('userData', JSON.stringify(userData))
    }, [userData])

    // Provide authentication state and setter to child components
    return <AuthContext.Provider value={{ userData, setUserData }}>{children}</AuthContext.Provider>
}