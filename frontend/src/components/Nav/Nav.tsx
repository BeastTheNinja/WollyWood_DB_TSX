import { NavLink } from "react-router"
import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"


export const Nav = () => {

    const baseLinks = [
        { label: 'Hjem', to: '/' },
        { label: 'Plakater', to: '/Plakater' },
        { label: 'Om os', to: '/om-os' },
        { label: 'Kontakt', to: '/kontakt' },
    ]

    const { userData, setUserData } = useContext(AuthContext)

    const links = userData
        ? [...baseLinks, { label: 'Logout', to: null }]
        : [...baseLinks, { label: 'Login', to: '/login' }]

    function logout() {
        setUserData(null)
    }


    return (
        <nav>
            <ul className="flex gap-16" >
                {links.map((link) => (
                    link.to ? (
                        <li className="pt-5" key={link.to}>
                            <NavLink
                                to={link.to}
                                className={({ isActive }) =>
                                    `text-[18px] font-normal font-inter uppercase ${isActive ? 'text-[#D97852] font-semibold' : 'text-[#524641] hover:text-[#D97852]'}
                                }`
                                }
                                end={link.to === '/'}
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ) : (
                        <li className="pt-5" key={link.label}>
                            <button
                                className="text-[18px] font-normal font-inter uppercase text-[#524641] hover:text-[#D97852] bg-none border-none cursor-pointer"
                                onClick={logout}
                            >
                                {link.label}
                            </button>
                        </li>
                    )
                ))}
            </ul>
        </nav>
    )
}