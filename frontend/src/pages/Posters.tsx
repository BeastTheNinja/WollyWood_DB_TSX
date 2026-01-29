import { useState } from "react";
import { PostersGrid } from "../components/pages/PostersComponent/PostersGrid";
import { SideNav } from "../components/pages/PostersComponent/SideNav";
import { useFetchData } from "../data/useFetchData";
import type { Moviedata } from "../types/movieType";

export const Posters = () => {
    const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

    const baseUrl = selectedGenre 
        ? `http://localhost:3000/posters/list_by_genre/${selectedGenre}?sort_key=random&limit=9&attributes=id,name,image,price`
        : `http://localhost:3000/posters?sort_key=random&limit=9&attributes=id,name,image,price`;

    const { data, loading, error } = useFetchData<Moviedata>(baseUrl);

    return (
        <>
            <div>
                <h2 className="text-2xl font-bold mb-4 ml-5 mt-2">Posters</h2>
            </div>
            
            <div className="flex ml-5 mr-5">
                <aside className="w-60 border-r">
                    <SideNav selectedGenre={selectedGenre} onGenreSelect={setSelectedGenre} />
                </aside>
                
                <main className="flex-1">
                    <PostersGrid data={data} loading={loading} error={error} />
                </main>
            </div>
        </>
    )
}