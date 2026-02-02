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
            />
            <div className="flex flex-col gap-2">
                <h4 className={`font-bold text-xl font-[OpenSans] ${isDarkMode ? 'text-gray-200' : 'text-[#524641]'}`}>
                    {movie.name}
                </h4>
                <div className={`font-[OpenSans] ${isDarkMode ? 'text-gray-300' : 'text-[#524641]'}`}>
                  {movie.description && parse(movie.description)}
                </div>
                <div className={`font-[OpenSans] flex justify-start gap-2 ${isDarkMode ? 'text-gray-300' : 'text-[#524641]'}`}>
                    Genre: {movie.genres.map((genre) => (
                        <p key={genre.id}>{genre.title}</p>
                    ))}
                </div>
                <button className={`font-[OpenSans] font-bold border px-4 py-2 rounded mt-auto w-fit ${isDarkMode ? 'bg-gray-700 text-gray-200 border-gray-500' : 'bg-[#D1B3A7] text-[#524641] border-[#524641]'}`}>
                    Læs mere
                </button>
            </div>
        </div>
    );
};
