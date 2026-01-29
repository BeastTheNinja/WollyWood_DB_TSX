import { useState } from "react";
import { DataGrid } from "../components/pages/DataGrid"
import { SideNav } from "../components/pages/PostersComponent/SideNav";

export const Posters = () => {
    const [selectedGenre, setSelectedGenre] = useState<number | null>(null);

    const baseUrl = `http://localhost:3000/posters?sort_key=random&limit=9&attributes=id,name,image`;
    const url = selectedGenre ? `${baseUrl}&genre_id=${selectedGenre}` : baseUrl;

    return (
        <>
            <SideNav selectedGenre={selectedGenre} onGenreSelect={setSelectedGenre} />
            <DataGrid url={url} title="Posters" />
        </>
    )
}