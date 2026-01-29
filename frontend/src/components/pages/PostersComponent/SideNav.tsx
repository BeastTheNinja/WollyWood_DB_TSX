import { useFetchData } from "../../../data/useFetchData"
import type { Genre } from "../../../types/movieType"

interface SideNavProps {
    selectedGenre: string | null;
    onGenreSelect: (slug: string | null) => void;
}

export const SideNav = ({ selectedGenre, onGenreSelect }: SideNavProps) => {
    const { data: genres, loading, error } = useFetchData<Genre>(`http://localhost:3000/genre`);

    return (
        <>
            <div className="flex justify-start flex-col gap-2">
                <h3>Filtre</h3>
                <p>Genre</p>

                <button onClick={() => onGenreSelect(null)}>Nulstil</button>

                {loading && <p>Indlæser...</p>}
                {error && <p>Fejl: {error}</p>}
                {genres && genres
                    .filter((genre) => {
                        const slug = genre.title.toLowerCase();
                        // Ekskluder genres der ikke har posters
                        return slug !== 'danske film' && slug !== 'børne - familiefilm' && slug !== 'film programmer' && slug !== 'marvel - dc comics' && slug !== 'store filmplakater' && slug !== 'krimi - thriller' && slug !== 'agent 007' && slug !== 'walt disney - pixar' && slug !== 'science fiction'; // tilføj flere hvis nødvendigt
                    })
                    .map((genre) => (
                        <button
                            key={genre.id}
                            onClick={() => onGenreSelect(genre.title.toLowerCase())}
                            className={selectedGenre === genre.title.toLowerCase() ? "active" : ""}
                        >
                            {genre.title}
                        </button>
                    ))
                }
            </div>
        </>
    )
}