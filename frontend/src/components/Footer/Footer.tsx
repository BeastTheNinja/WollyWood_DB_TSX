import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare"
import { FaInstagramSquare } from "@react-icons/all-files/fa/FaInstagramSquare"
import { FaPinterestSquare } from "@react-icons/all-files/fa/FaPinterestSquare"
import { FaTwitterSquare } from "@react-icons/all-files/fa/FaTwitterSquare"
import { useContext } from 'react'
import { DarkModeContext } from '../context/darkmodeContext'

export const Footer = () => {
    // Get dark mode state from context
    const darkModeContext = useContext(DarkModeContext)
    const isDarkMode = darkModeContext?.isDarkMode ?? false

    return (
        <footer className={`flex justify-between items-center p-4 border-t relative m-5 ${isDarkMode ? 'border-gray-600' : 'border-[#D1B3A7]'}`}>
            <div className="grid grid-cols-2 gap-20 relative">
                <div>
                    <p className={`font-[TitilliumWeb] text-[16px] font-bold ${isDarkMode ? 'text-[#D97852]' : 'text-[#B85A39]'}`}>WALLYWOOD</p>
                    <ul>
                        <li className={`font-[OpenSans] text-sm ${isDarkMode ? 'text-gray-300' : ''}`}>
                            Øster Uttrupvej 1
                        </li>
                        <li className={`font-[OpenSans] text-sm ${isDarkMode ? 'text-gray-300' : ''}`}>
                            9000 Aalborg
                        </li>
                    </ul>
                </div>
                <ul>
                    <li className={`font-[OpenSans] text-sm ${isDarkMode ? 'text-gray-300' : ''}`}>
                        CVR: 12345678
                    </li>
                    <li className={`font-[OpenSans] text-sm ${isDarkMode ? 'text-gray-300' : ''}`}>
                        MAIL: info@plakatshoppen.dk
                    </li>
                    <li className={`font-[OpenSans] text-sm ${isDarkMode ? 'text-gray-300' : ''}`}>
                        Mobil: +45 9812 3456
                    </li>
                </ul>
            </div>
            <div className="flex gap-2 absolute right-0 top-1">
                <FaTwitterSquare size={30} color={isDarkMode ? '#9CA3AF' : '#CCCCCC'} />
                <FaFacebookSquare size={30} color={isDarkMode ? '#9CA3AF' : '#CCCCCC'} />
                <FaInstagramSquare size={30} color={isDarkMode ? '#9CA3AF' : '#CCCCCC'} />
                <FaPinterestSquare size={30} color={isDarkMode ? '#9CA3AF' : '#CCCCCC'} />
            </div>
        </footer>
    )
}