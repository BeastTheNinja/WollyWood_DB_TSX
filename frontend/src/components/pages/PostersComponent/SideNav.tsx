import { useFetchData } from "../../../data/useFetchData"
import type { Genre } from "../../../types/movieType"

interface SideNavProps {
    selectedGenre: string | null;
    onGenreSelect: (slug: string | null) => void;
}

export const SideNav = ({ selectedGenre, onGenreSelect }: SideNavProps) => {
    const { data: genres, loading, error } = useFetchData<Genre>(`http://localhost:3000/genre`);

    return (
        <div className="pr-6 py-4">
            <div className="flex flex-col gap-4">
                <div>
                    <h3 className="font-bold text-lg">Filtre</h3>
                    <p className=" text-[#524641] m-3">Genre</p>
                </div>

                <button 
                    onClick={() => onGenreSelect(null)}
                    className="text-left px-3 py-2 hover:bg-gray-200 rounded"
                >
                    Nulstil
                </button>

                {loading && <p>Indlæser...</p>}
                {error && <p>Fejl: {error}</p>}
                
                <div className="flex flex-col gap-2">
                    {genres && genres
                        .filter((genre) => {
                            const slug = genre.title.toLowerCase();
                            return slug !== 'danske film' && slug !== 'børne - familiefilm' && slug !== 'film programmer' && slug !== 'marvel - dc comics' && slug !== 'store filmplakater' && slug !== 'krimi - thriller' && slug !== 'agent 007' && slug !== 'walt disney - pixar' && slug !== 'science fiction';
                        })
                        .map((genre) => (
                            <button
                                key={genre.id}
                                onClick={() => onGenreSelect(genre.title.toLowerCase())}
                                className={`text-left px-3 py-2 rounded ${selectedGenre === genre.title.toLowerCase() ? "active text-[#5C1F06]" : "hover:bg-gray-200"}`}
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