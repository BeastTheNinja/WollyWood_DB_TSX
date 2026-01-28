import { NavLink } from "react-router"


export const Nav = () => {

    const links = [
        { label: 'Home', to: '/' },
        { label: 'About', to: '/about' },
        { label: 'Posters', to: '/posters' },
        { label: 'Contact', to: '/contact' },
        { label: 'Login', to: '/login' },
    ]

    return (
        <nav  >
            <ul className="flex gap-16 right-6 relative" >
                {links.map((link) => (
                    <li className="pt-5" key={link.to}>
                        <NavLink
                            to={link.to}
                            className={({ isActive }) =>
                                `text-[18px] font-normal font-inter uppercase ${isActive ? 'text-[#524641] font-semibold' : 'text-[#524641] hover:text-[#D97852]'}
                                }`
                            }
                            end={link.to === '/'}
                        >
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}