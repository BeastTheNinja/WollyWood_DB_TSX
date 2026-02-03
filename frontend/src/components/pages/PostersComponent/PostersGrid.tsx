import { MovieCard } from "./MovieCard";
import type { Moviedata } from "../../../types/movieType";
import { useContext } from 'react'
import { DarkModeContext } from '../../context/darkmodeContext'

interface PostersGridProps {
    data: Moviedata[] | undefined;
    loading: boolean;
    error: string | null;
}

export const PostersGrid = ({ data, loading, error }: PostersGridProps) => {
    // Get dark mode state from context
    const darkModeContext = useContext(DarkModeContext)
    const isDarkMode = darkModeContext?.isDarkMode ?? false

    return (
        <div className="grid grid-cols-3 gap-6">
            {loading && <p className={`font-[OpenSans] ${isDarkMode ? 'text-gray-300' : 'text-[#524641]'}`}>Indlæser...</p>}
            {error && <p className="text-red-500 font-[OpenSans]">Fejl: {error}</p>}
            {!loading && !error && data && data.length === 0 && <p className={isDarkMode ? 'text-gray-300' : ''}>Ingen data fundet</p>}
            {data && data.map((poster) => (
                <MovieCard key={poster.id} movie={poster} />
            ))}
        </div>
    )
}