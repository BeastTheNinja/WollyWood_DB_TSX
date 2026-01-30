import { useState } from "react";
import { PostersGrid } from "../components/pages/PostersComponent/PostersGrid";
import { SideNav } from "../components/pages/PostersComponent/SideNav";
import { useFetchData } from "../data/useFetchData";
import type { Moviedata, SortOption } from "../types/movieType";
import { Dropdown } from "../components/pages/PostersComponent/Dropdown";
import { Title } from "../components/pages/HomeComponent/Title";
import { PriceFilter } from "../components/pages/PostersComponent/PriceFilter";

export const Posters = () => {
    const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
    const [selectedSort, setSelectedSort] = useState<SortOption | null>(null);
    const [priceRange, setPriceRange] = useState<{ min: number; max: number } | null>(null);

    const params = new URLSearchParams({
        limit: "9",
        attributes: "id,name,image,price",
    });

    if (selectedSort) {
        params.set("sort_key", "price");
        params.set("sort_direction", selectedSort === "price_asc" ? "asc" : "desc");
    } else if (!selectedGenre) {
        params.set("sort_key", "random");
    }

    // Tilføj pris filter til URL hvis valgt
    if (priceRange) {
        params.set("min_price", priceRange.min.toString());
        params.set("max_price", priceRange.max.toString());
    }

    const baseUrl = selectedGenre
        ? `http://localhost:3000/posters/list_by_genre/${selectedGenre}?${params.toString()}`
        : `http://localhost:3000/posters?${params.toString()}`;

    const { data, loading, error } = useFetchData<Moviedata>(baseUrl);

    // Filtrer data baseret på priceRange
    const filteredData = priceRange && data
        ? data.filter(poster =>
            poster.price >= priceRange.min &&
            poster.price <= priceRange.max
        )
        : data;

    return (
        <>
            <div className='flex justify-between items-center'>
                <Title title="Plakater" />
                <Dropdown onSelectSort={setSelectedSort} />
            </div>

            <div className="flex ml-5 mr-5 gap-10">
                <aside className="w-80 border-r pr-10">
                    <SideNav selectedGenre={selectedGenre} onGenreSelect={setSelectedGenre} />
                    <PriceFilter onPriceFilter={setPriceRange} />
                </aside>

                <main className="flex-1 pl-10">
                    <PostersGrid data={filteredData} loading={loading} error={error} />
                </main>
            </div>
        </>
    );
};