import { useState } from 'react'
import { User, UserContext } from './UserContext'

const initialUser: User = {
    id: 0,
    name: '',
    email: '',
}

interface UserProviderProps {
    children: React.ReactNode
}

export const UserProvider: React.FC<UserProviderProps> = ({
    children,
}: any) => {
    const [user, setUser] = useState<User>(initialUser)

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
