import '../../style/Fonts.css'
import { Nav } from '../Nav/Nav'
import { FaShoppingBasket } from "@react-icons/all-files/fa/FaShoppingBasket";
import { useContext } from 'react'
import { DarkModeContext } from '../context/darkmodeContext'

export const Header = () => {
    // Get dark mode state from context
    const darkModeContext = useContext(DarkModeContext)
    const isDarkMode = darkModeContext?.isDarkMode ?? false

    return (
        <>
            {/* Main header with logo, shopping cart icon, and navigation */}
            <header className={`flex items-end justify-between border-b relative ml-5 mr-5 mt-0 mb-0 ${isDarkMode ? 'border-gray-600' : 'border-[#5C1F06]'}`}>
                {/* Brand logo */}
                <h1 className={`font-[TitilliumWeb] text-[54px] ${isDarkMode ? 'text-[#D97852]' : 'text-[#D97852]'}`}>WALLYWOOD</h1>
                <div className='flex items-center gap-4'>
                    {/* Shopping cart icon - positioned absolutely in top right */}
                    <FaShoppingBasket className={`absolute right-0 top-4 w-5 h-4 ${isDarkMode ? 'text-gray-300' : ''}`} />
                </div>
                {/* Navigation menu */}
                <Nav />
            </header>
        </>
    )
}