import { useFetchData } from "../../data/useFetchData";
import type { Moviedata } from "../../types/movieType";
import { MovieCard } from "./PostersComponent/MovieCard";
import { useContext } from 'react'
import { DarkModeContext } from '../context/darkmodeContext'

interface DataGridProps {
    url: string;
    title?: string;
}

export const DataGrid = ({ url, title }: DataGridProps) => {
    const { data, loading, error } = useFetchData<Array<Moviedata>>(url);

    // Get dark mode state from context
    const darkModeContext = useContext(DarkModeContext)
    const isDarkMode = darkModeContext?.isDarkMode ?? false

    return (
        <>
            {title && (
                <div>
                    <h2 className={`text-2xl font-bold mb-4 ml-5 mt-2 ${isDarkMode ? 'text-gray-200' : ''}`}>{title}</h2>
                </div>
            )}

            <div className="ml-5 mr-5 grid grid-cols-3 gap-6">
                {loading && <p className={`font-[OpenSans] ${isDarkMode ? 'text-gray-300' : 'text-[#3B2A22]'}`}>Indlæser...</p>}
                {error && <p className="text-red-500 font-[OpenSans]">Fejl: {error}</p>}
                {!loading && !error && data && data.length === 0 && <p className={isDarkMode ? 'text-gray-300' : ''}>Ingen data fundet</p>}
                {data && data.map((poster) => (
                    <MovieCard key={poster.id} movie={poster} />
                ))}
            </div>
        </>
    )
}