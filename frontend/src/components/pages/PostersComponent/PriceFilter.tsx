import { useState, useContext } from "react";
import { DarkModeContext } from '../../context/darkmodeContext'

type PriceFilterProps = {
    onPriceFilter: (range: { min: number; max: number }) => void;
};

export const PriceFilter = ({ onPriceFilter }: PriceFilterProps) => {
    const [minPrice, setMinPrice] = useState<string>("");
    const [maxPrice, setMaxPrice] = useState<string>("");

    // Get dark mode state from context
    const darkModeContext = useContext(DarkModeContext)
    const isDarkMode = darkModeContext?.isDarkMode ?? false

    const handleFilter = () => {
        onPriceFilter({
            min: minPrice ? Number(minPrice) : 0,
            max: maxPrice ? Number(maxPrice) : 999999,
        });
    };
    const handleReset = () => {
        setMinPrice("");
        setMaxPrice("");
        onPriceFilter({ min: 0, max: 999999 });
    };

    return (
        <>

            <h3 className={`font[OpenSans + font-semibold] pb-5 ${isDarkMode ? 'text-gray-200' : 'text-[#3B2A22]'}`}>Prisfilter</h3>
            <div className="flex gap-4 items-center">
                <label htmlFor="min-price" className="sr-only">Minimum pris</label>
                <input
                    id="min-price"
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    placeholder="Fra"
                    className={`border px-3 py-2 rounded w-20 ${isDarkMode ? 'bg-gray-800 border-gray-600 text-gray-200' : 'border-[#A68E85]'}`}
                />
                <span className={isDarkMode ? 'text-gray-300' : ''}>-</span>
                <label htmlFor="max-price" className="sr-only">Maksimum pris</label>
                <input
                    id="max-price"
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    placeholder="Til"
                    className={`border px-3 py-2 rounded w-20 ${isDarkMode ? 'bg-gray-800 border-gray-600 text-gray-200' : 'border-[#A68E85]'}`}
                />
                <p className={`font-[OpenSans + text-sm + font-normal] ${isDarkMode ? 'text-gray-300' : 'text-[#3B2A22]'}`}>kr</p>
            </div>
            <div className="flex gap-10">
                <button
                    onClick={handleFilter}
                    className={`rounded w-20 h-10 mt-4 ${isDarkMode ? 'bg-[#D97852] text-white' : 'bg-[#D97852] text-white'}`}>
                    Filter
                </button>
                <button onClick={handleReset} className="bg-[#D97852] text-white rounded w-20 h-10  mt-4">
                    Nulstil
                </button>
            </div>

        </>
    );
};