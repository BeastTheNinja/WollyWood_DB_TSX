import type { Moviedata } from '../../../types/movieType';
import { useContext } from 'react'
import { DarkModeContext } from '../../context/darkmodeContext'
import { NavLink } from 'react-router';

interface MovieCardProps {
    movie: Moviedata;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
    // Get dark mode state from context
    const darkModeContext = useContext(DarkModeContext)
    const isDarkMode = darkModeContext?.isDarkMode ?? false

    return (
        <div className={`flex flex-col gap-2 h-full ${isDarkMode ? 'bg-gray-800' : ''}`}>
            <div className="w-full h-80 overflow-hidden">
                <NavLink to={`/details/${movie.slug}`}>


                    <img
                        className="w-full h-full object-cover"
                        src={movie.image}
                        alt={movie.name}
                        width={480}
                        height={640}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading="lazy"
                        decoding="async"
                    />
                </NavLink>
            </div>
            <div className="flex flex-col gap-2 flex-1">
                <h3 className={`font-bold text-lg font-[OpenSans] text-center ${isDarkMode ? 'text-gray-200' : 'text-[#3B2A22]'}`}>
                    {movie.name}
                </h3>
                <p className={`font-[OpenSans] text-lg font-bold text-center ${isDarkMode ? 'text-gray-300' : 'text-[#3B2A22]'}`}>
                    {movie.price}kr
                </p>
                <button className={`font-[OpenSans] border px-4 py-2 rounded mt-auto w-fit self-center ${isDarkMode ? 'bg-gray-700 text-gray-200 border-gray-500' : 'bg-[#D1B3A7] text-[#3B2A22] border-[#524641]'}`}>
                    Læg i kurv
                </button>
            </div>
        </div>
    );
};
