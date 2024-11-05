import useUserContext from './hook/useUserHook'

export const HomePage = () => {
    const { user, setUser } = useUserContext()

    return (
        <div className="my-5">
            HomePage
            <h1>{user?.name}</h1>
        </div>
    )
}
