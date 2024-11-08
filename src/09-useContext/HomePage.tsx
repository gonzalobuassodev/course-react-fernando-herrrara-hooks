import useUserContext from './hook/useUserHook'

export const HomePage = () => {
    const { user, setUser } = useUserContext()

    return (
        <div className="my-5">
            HomePage
            <h1>{user?.name}</h1>

            <hr />

            <pre aria-label='pre'>
                { JSON.stringify(user, null, 3)}
            </pre>
        </div>
    )
}
