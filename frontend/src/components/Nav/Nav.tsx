import { NavLink } from "react-router"
import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"
import { DarkModeContext } from "../context/darkmodeContext"

type NavItem =
    | { type: 'link'; label: string; to: string }
    | { type: 'logout'; label: 'Logout' }
    | { type: 'toggle'; label: string }

export const Nav = () => {
    const baseLinks = [
        { label: 'Hjem', to: '/' },
        { label: 'Plakater', to: '/Plakater' },
        { label: 'Om os', to: '/om-os' },
        { label: 'Kontakt', to: '/kontakt' },
    ]

    const { userData, setUserData } = useContext(AuthContext)
    const darkModeContext = useContext(DarkModeContext)

    if (!darkModeContext) {
        return <div>Error: DarkModeContext not found</div>
    }

    const { isDarkMode, toggleDarkMode } = darkModeContext

    const links: NavItem[] = [
        ...baseLinks.map(l => ({ ...l, type: 'link' as const })),
        userData ? { type: 'logout', label: 'Logout' } : { type: 'link', label: 'Login', to: '/login' },
        { type: 'toggle', label: isDarkMode ? 'dark' : 'light' },
    ]

    function logout() {
        setUserData(null)
    }

    return (
        <nav>
            <ul className="flex gap-16">
                {links.map((link, index) => {
                    switch (link.type) {
                        case 'link':
                            return (
                                <li className="pt-5" key={link.to}>
                                    <NavLink
                                        to={link.to}
                                        className={({ isActive }) =>
                                            `text-[18px] font-normal font-inter uppercase ${isActive ? 'text-[#D97852] font-semibold' : 'text-[#524641] hover:text-[#D97852]'}`
                                        }
                                        end={link.to === '/'}
                                    >
                                        {link.label}
                                    </NavLink>
                                </li>
                            )
                        case 'logout':
                            return (
                                <li className="pt-5" key="logout">
                                    <button
                                        className="text-[18px] font-normal font-inter uppercase text-[#524641] hover:text-[#D97852] bg-none border-none cursor-pointer"
                                        onClick={logout}
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            )
                        case 'toggle':
                            return (
                                <li className="pt-5" key={`toggle-${index}`}>
                                    <button
                                        onClick={toggleDarkMode}
                                        className="text-[18px] font-normal font-inter uppercase text-[#524641] hover:text-[#D97852] dark:text-gray-200 dark:hover:bg-gray-600 rounded"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            )
                        default:
                            return null
                    }
                })}
            </ul>
        </nav>
    )
}