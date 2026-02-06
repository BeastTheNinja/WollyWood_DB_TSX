import parse from 'html-react-parser';
import type { Moviedata } from '../../../types/movieType';
import { useContext } from 'react'
import { DarkModeContext } from '../../context/darkmodeContext'

interface MovieCardProps {
    movie: Moviedata;
}

export const MovieCardHome = ({ movie }: MovieCardProps) => {
    // Get dark mode state from context
    const darkModeContext = useContext(DarkModeContext)
    const isDarkMode = darkModeContext?.isDarkMode ?? false

    return (
        <div className={`flex gap-4 border rounded-lg p-4 max-w-md ${isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-[#D1B3A7]'}`}>
            <img
                className="w-52 h-auto object-cover"
                src={movie.image}
                alt={movie.name}
                width={208}
                height={312}
                sizes="(max-width: 768px) 100vw, 208px"
                loading="lazy"
                decoding="async"
            />
            <div className="flex flex-col gap-2">
                <h3 className={`font-bold text-xl font-[OpenSans] ${isDarkMode ? 'text-gray-200' : 'text-[#3B2A22]'}`}>
                    {movie.name}
                </h3>
                <div className={`font-[OpenSans] ${isDarkMode ? 'text-gray-300' : 'text-[#3B2A22]'}`}>
                    {movie.description && parse(movie.description)}
                </div>
                <div className={`font-[OpenSans] flex justify-start gap-2 ${isDarkMode ? 'text-gray-300' : 'text-[#3B2A22]'}`}>
                    Genre: {movie.genres.map((genre) => (
                        <p key={genre.id}>{genre.title}</p>
                    ))}
                </div>
                <button className={`font-[OpenSans] font-bold border px-4 py-2 rounded mt-auto w-fit ${isDarkMode ? 'bg-gray-700 text-gray-200 border-gray-500' : 'bg-[#D1B3A7] text-[#3B2A22] border-[#524641]'}`}>
                    Læs mere
                </button>
            </div>
        </div>
    );
};
