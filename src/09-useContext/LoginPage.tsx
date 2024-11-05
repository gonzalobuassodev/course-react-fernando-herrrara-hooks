import { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const LoginPage = () => {
    const { user, setUser } = useContext(UserContext)!
    // console.log(user)

    return (
        <div className="my-5">
            LoginPage
            <h1>{user?.name}</h1>
            <button
                onClick={() =>
                    setUser({
                        id: 123,
                        name: 'Gonzalo Buasso',
                        email: 'gonzalobuasso@gmail.com',
                    })
                }
                className="p-4 bg-blue-500 hover:bg-blue-800"
            >
                Set Usuario
            </button>
        </div>
    )
}
