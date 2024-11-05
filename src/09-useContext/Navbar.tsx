import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className="flex items-center p-3 gap-3 bg-slate-800 rounded-md mb-5">
            <NavLink to="/" className="text-white">
                useContext
            </NavLink>
            <NavLink
                className={(arg) => {
                    return arg.isActive ? 'text-red-500' : 'text-slate-500'
                }}
                to="/"
            >
                Home
            </NavLink>
            <NavLink
                className={(arg) => {
                    return arg.isActive ? 'text-red-500' : 'text-slate-500'
                }}
                to="/about"
            >
                About
            </NavLink>
            <NavLink
                className={(arg) => {
                    return arg.isActive ? 'text-red-500' : 'text-slate-500'
                }}
                to="/login"
            >
                Login
            </NavLink>
        </div>
    )
}
