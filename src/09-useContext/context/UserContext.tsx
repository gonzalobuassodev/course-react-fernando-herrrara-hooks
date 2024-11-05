import { createContext } from 'react'

export interface User {
    id: number
    name: string
    email: string
}

export interface UserContextType {
    user: User
    setUser: React.Dispatch<React.SetStateAction<User>>
}

export const UserContext = createContext<UserContextType | null>(null)
