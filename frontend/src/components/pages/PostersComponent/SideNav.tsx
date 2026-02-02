import { useFetchData } from "../../../data/useFetchData"
import type { Genre } from "../../../types/movieType"
import { useContext } from 'react'
import { DarkModeContext } from '../../context/darkmodeContext'

interface SideNavProps {
    selectedGenre: string | null;
    onGenreSelect: (slug: string | null) => void;
}

export const SideNav = ({ selectedGenre, onGenreSelect }: SideNavProps) => {
    const { data: genres, loading, error } = useFetchData<Genre>(`http://localhost:3000/genre`);
    
    // Get dark mode state from context
    const darkModeContext = useContext(DarkModeContext)
    const isDarkMode = darkModeContext?.isDarkMode ?? false

    return (
        <div className="flex flex-col mb-5">
            <div className="flex flex-col">
                <div>
                    <h3 className={`font-bold text-lg ${isDarkMode ? 'text-gray-200' : ''}`}>Filtre</h3>
                    <p className={`m-3 ${isDarkMode ? 'text-gray-300' : 'text-[#524641]'}`}>Genre</p>
                </div>

                <button 
                    onClick={() => onGenreSelect(null)}
                    className={`text-left px-3 py-2 rounded ${isDarkMode ? 'hover:bg-gray-700 text-gray-200' : 'hover:bg-gray-200'}`}
                >
                    Nulstil
                </button>

                {loading && <p className={isDarkMode ? 'text-gray-300' : ''}>Indlæser...</p>}
                {error && <p className="text-red-500">Fejl: {error}</p>}
                
                <div className="flex flex-col ">
                    {genres && genres
                        .map((genre) => (
                            <button
                                key={genre.id}
                                onClick={() => onGenreSelect(genre.slug.toLowerCase())}
                                className={`text-left px-3 py-2 rounded ${
                                    selectedGenre === genre.slug.toLowerCase() 
                                        ? isDarkMode ? "text-[#D97852] font-semibold" : "text-[#5C1F06] font-semibold"
                                        : isDarkMode ? "hover:bg-gray-700 text-gray-200" : "hover:bg-gray-200"
                                }`}
                            >
                                {genre.title}
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}