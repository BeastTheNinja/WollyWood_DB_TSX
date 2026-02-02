import { createContext, type SetStateAction } from 'react'
import type { UserData } from '../../types/userType'


// TypeScript interface for authentication context
interface AuthContextProps {
    userData: UserData | null
    setUserData: React.Dispatch<SetStateAction<UserData | null>>
}

// Create authentication context - provides user data and setter across the app
export const AuthContext = createContext<AuthContextProps>(undefined!)