import { useContext } from 'react'
import { DarkModeContext } from '../../context/darkmodeContext'

export const FigureCard = () => {
    // Get dark mode state from context
    const darkModeContext = useContext(DarkModeContext)
    const isDarkMode = darkModeContext?.isDarkMode ?? false

    return (
        <>
            <div className="space-y-4">
                <p className={`font-[OpenSans] ${isDarkMode ? 'text-gray-300' : 'text-[#524641]'}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque ac ipsum sed faucibus. Vivamus mollis sagittis hendrerit. Donec turpis erat, vestibulum non turpis sed, finibus congue velit. Pellentesque sagittis est eget nisi malesuada, a aliquet est imperdiet. Aenean dapibus finibus laoreet. Pellentesque suscipit hendrerit enim, non tempor erat sodales quis. Nullam sed enim eu elit posuere commodo at în nisl. Aliquam egestas turpis vel odio consectetur auctor. Cras porttitor orci non scelerisque porttitor. Phasellus dictum ligula rutrum neque pharetra, faucibus molestie libero ultricies. Aenean risus risus, sollicitudin at rutrum vel, venenatis ac urna. Phasellus a pulvinar massa.
                </p>
                <p className={`font-[OpenSans] ${isDarkMode ? 'text-gray-300' : 'text-[#524641]'}`}>
                    Phasellus faucibus libero eu malesuada tristique. Donec tristique lacus in ipsum sollicitudin viverra. Sed porttitor sit amet felis accumsan egestas. Fusce quis commodo urna, non feugiat odio. Nam in tempus magna. Quisque eu neque sed lacus egestas pulvinar eget in lacus. Quisque sit amet sem efficitur sapien bibendum mollis. Quisque in eros sit amet justo scelerisque rutrum.
                </p>
                <p className={`font-[OpenSans] font-normal text-sm ${isDarkMode ? 'text-gray-300' : 'text-[#524641]'}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque ac ipsum sed faucibus. Vivamus mollis sagittis hendrerit. Donec turpis erat, vestibulum non turpis sed, finibus congue velit. Pellentesque sagittis est eget nisi malesuada, a aliquet est imperdiet. Aenean dapibus finibus laoreet. Pellentesque suscipit hendrerit enim, non tempor erat sodales quis. Nullam sed enim eu elit posuere commodo at în nisl.
                </p>
            </div>
        </>
    )
}
