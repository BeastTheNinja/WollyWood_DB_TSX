import { useParams } from "react-router";
import type { Moviedata } from "../../../types/movieType";
import { useFetchData } from "../../../data/useFetchData";
import { DarkModeContext } from "../../context/darkmodeContext";
import { useContext, useState } from "react";
import parse from 'html-react-parser';
import { SideNav } from "../PostersComponent/SideNav";
import { GoSmiley } from "react-icons/go";



export const Details = () => {
    const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
    const darkModeContext = useContext(DarkModeContext)
    const isDarkMode = darkModeContext?.isDarkMode ?? false

    const params = useParams();


    const { data, loading, error } = useFetchData<Moviedata>(`http://localhost:3000/posters/${params.slug}`);


    if (loading) {
        return <h1>loading</h1>
    }
    if (error) {
        return <h1>error</h1>
    }

    // Tilføj en null check
    if (!data) {
        return <h1>Ingen data fundet</h1>
    }

    console.log('slug data:', data);


    return (


        <div className={`ml-5 mt-5 mr-5 flex gap-6 ${isDarkMode ? 'bg-gray-800' : ''}`}>
            <aside className="w-80 border-r pr-10">
                <SideNav selectedGenre={selectedGenre} onGenreSelect={setSelectedGenre} />
            </aside>
            <>
                <div className="flex items-center">
                    <img
                        className="w-80 h-80 object-cover"
                        src={data.image}
                        alt={data.name}

                    />
                </div>
                <div className="flex flex-col justify-center gap-2">
                    <h4 className={`font-bold text-[20px] font-[OpenSans] ${isDarkMode ? 'text-gray-200' : 'text-[#524641]'}`}>
                        {data.name}
                    </h4>
                    <div className={`font-[OpenSans] text-sm ${isDarkMode ? 'text-gray-300' : 'text-[#524641]'}`}>
                        {data.description && parse(data.description)}
                    </div>
                    <h4 className={`font-[OpenSans] text-[16px] ${isDarkMode ? 'text-gray-300' : 'text-[#524641]'}`}>
                        Størrelse: {data.width} x {data.height} cm
                    </h4>
                    <h4 className={`font-[OpenSans] text-[16px] ${isDarkMode ? 'text-gray-300' : 'text-[#524641]'}`}>
                        Varenummer(SKU): {data.id}
                    </h4>
                    <h4 className={`font-[OpenSans] text-[16px] font-bold ${isDarkMode ? 'text-gray-300' : 'text-[#524641]'}`}>
                        {data.price}kr
                    </h4>
                    <div className="flex justify-between">
                        <div className="flex gap-4 items-center">
                            <input type="number" className={`border px-3 py-2 rounded w-20 ${isDarkMode ? 'bg-gray-800 border-gray-600 text-gray-200' : 'border-[#A68E85]'}`} />
                            <button className={`font-[OpenSans] border px-4 py-2 rounded mt-auto w-fit self-center ${isDarkMode ? 'bg-gray-700 text-gray-200 border-gray-500' : 'bg-[#D1B3A7] text-[#524641] border-[#524641]'}`}>
                                Læg i kurv
                            </button>
                        </div>
                        <div className={`font-[OpenSans] text-sm ${isDarkMode ? 'text-gray-300' : 'text-[#524641]'} flex items-center gap-2`}>
                            <GoSmiley className="text-[#006F00]" size={20} />
                            <p>{data.stock} <span className="text-[#006600]"> på lager</span></p>
                        </div>
                    </div>
                </div>
            </>
        </div>

    )
}