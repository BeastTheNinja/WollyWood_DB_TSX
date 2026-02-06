import { Outlet } from "react-router"
import { Header } from "../components/Header/Header"
import { Footer } from "../components/Footer/Footer"
import { useContext } from "react"
import { DarkModeContext } from "../components/context/darkmodeContext"

export const Layout = () => {







    // Get dark mode state from context
    const darkModeContext = useContext(DarkModeContext)
    const isDarkMode = darkModeContext?.isDarkMode ?? false

    return (
        // Main layout wrapper - applies dark mode class conditionally
        <div className={`max-w-341.5 max-h-screen mx-auto ${isDarkMode ? 'dark' : ''}`}>
            {/* Content wrapper with theme-aware background */}
            <div className="bg-[#F9F9F9] dark:bg-gray-900 drop-shadow-[#000029]">
                <Header />
                {/* Main landmark for routed pages */}
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    )
}