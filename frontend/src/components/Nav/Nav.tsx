import { NavLink } from "react-router"


export const Nav = () => {

    const links = [
        { label: 'Hjem', to: '/' },
        { label: 'Plakater', to: '/Plakater' },
        { label: 'Om os', to: '/om-os' },
        { label: 'Kontakt', to: '/kontakt' },
        { label: 'Login', to: '/login' },
    ]

    return (
        <nav>
            <ul className="flex gap-16" >
                {links.map((link) => (
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
                ))}
            </ul>
        </nav>
    )
}