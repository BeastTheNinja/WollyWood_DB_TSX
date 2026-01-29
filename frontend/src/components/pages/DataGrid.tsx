import { useFetchPosters } from "../../data/useFetchData";
import type { Moviedata } from "../../types/movieType";
import { MovieCard } from "./HomeComponent/MovieCard";

interface DataGridProps {
    url: string;
    title?: string;
}

export const DataGrid = ({ url, title }: DataGridProps) => {
    const { data, loading, error } = useFetchPosters<Moviedata>(url);

    return (
        <>
            {title && (
                <div>
                    <h2 className="text-2xl font-bold mb-4 ml-5 mt-2">{title}</h2>
                </div>
            )}

            <div className="ml-5 mr-5 grid grid-cols-3 gap-6">
                {loading && <p className="text-[#524641] font-[OpenSans]">Indlæser...</p>}
                {error && <p className="text-red-500 font-[OpenSans]">Fejl: {error}</p>}
                {!loading && !error && data && data.length === 0 && <p>Ingen data fundet</p>}
                {data && data.map((poster) => (
                    <MovieCard key={poster.id} movie={poster} />
                ))}
            </div>
        </>
    )
}