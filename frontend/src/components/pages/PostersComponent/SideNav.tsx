import { useFetchData } from "../../../data/useFetchData"
import type { Genre } from "../../../types/movieType"

interface SideNavProps {
    selectedGenre: number | null;
    onGenreSelect: (id: number | null) => void;
}

export const SideNav = ({ selectedGenre, onGenreSelect }: SideNavProps) => {
    const { data: genres, loading, error } = useFetchData<Genre>(`http://localhost:3000/genres`);

    return (
        <>
            <div>
                <h3>Filtre</h3>
                <p>Genre</p>

                <button onClick={() => onGenreSelect(null)}>Nulstil</button>

                {loading && <p>Indlæser...</p>}
                {error && <p>Fejl: {error}</p>}
                {genres && genres.map((genre) => (
                    <button
                        key={genre.id}
                        onClick={() => onGenreSelect(genre.id)}
                        className={selectedGenre === genre.id ? "active" : ""}
                    >
                        {genre.title}
                    </button>
                ))}
            </div>
        </>
    )
}