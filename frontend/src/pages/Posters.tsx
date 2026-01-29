import { useState } from "react";
import { DataGrid } from "../components/pages/DataGrid"
import { SideNav } from "../components/pages/PostersComponent/SideNav";

export const Posters = () => {
    const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

    const baseUrl = selectedGenre 
        ? `http://localhost:3000/posters/list_by_genre/${selectedGenre}?sort_key=random&limit=9&attributes=id,name,image`
        : `http://localhost:3000/posters?sort_key=random&limit=9&attributes=id,name,image`;

    return (
        <>
            <div>
                <h2 className="text-2xl font-bold mb-4 ml-5 mt-2">Posters</h2>
            </div>
            
            <div className="flex ml-5 mr-5">
                <aside className="w-25 border-r">
                    <SideNav selectedGenre={selectedGenre} onGenreSelect={setSelectedGenre} />
                </aside>
                
                <main className="flex-1">
                    <DataGrid url={baseUrl} />
                </main>
            </div>
        </>
    )
}