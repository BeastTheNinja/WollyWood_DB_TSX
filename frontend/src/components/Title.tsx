import { useContext } from 'react'
import { DarkModeContext } from './context/darkmodeContext'

interface TitleProps {
    title: string;
}

export const Title = ({ title }: TitleProps) => {
    // Get dark mode state from context
    const darkModeContext = useContext(DarkModeContext)
    const isDarkMode = darkModeContext?.isDarkMode ?? false

    return (
        <>
            <h2 className={`text-[32px] font-[TitilliumWeb] ml-5 font-bold text-left ${isDarkMode ? 'text-[#D97852]' : 'text-[#B85A39]'}`}>{title}</h2>
        </>
    )
}