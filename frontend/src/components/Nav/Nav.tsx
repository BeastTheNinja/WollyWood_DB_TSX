import { NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { DarkModeContext } from "../context/darkmodeContext";

// Union type for navigation items - supports regular links, logout button, and dark mode toggle
type NavItem =
    | { type: "link"; label: string; to: string }
    | { type: "logout"; label: "Logout" }
    | { type: "toggle"; label: string };

export const Nav = () => {
    // Base navigation links that are always visible
    const baseLinks = [
        { label: "Hjem", to: "/" },
        { label: "Plakater", to: "/Plakater" },
        { label: "Om os", to: "/om-os" },
        { label: "Kontakt", to: "/kontakt" },
    ];

    // Get authentication state and dark mode context
    const { userData, setUserData } = useContext(AuthContext);
    const darkModeContext = useContext(DarkModeContext);

    // Guard clause - ensure dark mode context exists
    if (!darkModeContext) {
        return <div>Error: DarkModeContext not found</div>;
    }

    const { isDarkMode, toggleDarkMode } = darkModeContext;

    // Build navigation items dynamically based on user authentication state
    // Shows "Logout" if user is logged in, otherwise shows "Login"
    const links: NavItem[] = [
        ...baseLinks.map((l) => ({ ...l, type: "link" as const })),
        userData ?
            { type: "logout", label: "Logout" }
            : { type: "link", label: "Login", to: "/login" },
        { type: "toggle", label: isDarkMode ? "dark" : "light" },
    ];

    // Clear user data from context on logout
    function logout() {
        setUserData(null);
    }

    return (
        <nav className={` ${isDarkMode ? 'dark' : ''}`}>
            <ul className="flex gap-16">
                {links.map((link, index) => {
                    switch (link.type) {
                        case "link":
                            return (
                                <li className="pt-5" key={link.to}>
                                    <NavLink
                                        to={link.to}
                                        className={({ isActive }) =>
                                            `text-[18px] font-normal font-inter uppercase ${isActive
                                                ? "text-[#B85A39] font-semibold dark:text-[#D97852]"
                                                : "text-[#3B2A22] hover:text-[#B85A39] dark:text-gray-200 dark:hover:text-[#D97852]"
                                            }`
                                        }
                                        end={link.to === "/"}>
                                        {link.label}
                                    </NavLink>
                                </li>
                            );
                        case "logout":
                            return (
                                <li className="pt-5" key="logout">
                                    <button
                                        className="text-[18px] font-normal font-inter uppercase text-[#3B2A22] hover:text-[#B85A39] dark:text-gray-200 dark:hover:text-[#D97852] bg-none border-none cursor-pointer"
                                        onClick={logout}>
                                        {link.label}
                                    </button>
                                </li>
                            );
                        case "toggle":
                            return (
                                <li className="pt-5" key={`toggle-${index}`}>
                                    <button
                                        onClick={toggleDarkMode}
                                        className="text-[18px] font-normal font-inter uppercase text-[#3B2A22] hover:text-[#B85A39] dark:text-gray-200 dark:hover:bg-gray-600 rounded">
                                        {link.label}
                                    </button>
                                </li>
                            );
                        default:
                            return null;
                    }
                })}
            </ul>
        </nav>
    );
};
