import { MovieCard } from "./MovieCard";
import type { Moviedata } from "../../../types/movieType";

interface PostersGridProps {
    data: Moviedata[] | null;
    loading: boolean;
    error: string | null;
}

export const PostersGrid = ({ data, loading, error }: PostersGridProps) => {
    return (
        <div className="grid grid-cols-3 gap-6">
            {loading && <p className="text-[#524641] font-[OpenSans]">Indlæser...</p>}
            {error && <p className="text-red-500 font-[OpenSans]">Fejl: {error}</p>}
            {!loading && !error && data && data.length === 0 && <p>Ingen data fundet</p>}
            {data && data.map((poster) => (
                <MovieCard key={poster.id} movie={poster} />
            ))}
        </div>
    )
}