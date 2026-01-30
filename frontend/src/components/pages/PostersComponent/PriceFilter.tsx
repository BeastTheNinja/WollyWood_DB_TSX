import { useState } from "react";

type PriceFilterProps = {
    onPriceFilter: (range: { min: number; max: number }) => void;
};

export const PriceFilter = ({ onPriceFilter }: PriceFilterProps) => {
    const [minPrice, setMinPrice] = useState<string>("");
    const [maxPrice, setMaxPrice] = useState<string>("");

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

            <h3 className="font[OpenSans + font-semibold] pb-5">Prisfilter</h3>
            <div className="flex gap-4 items-center">
                <input
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    placeholder="Fra"
                    className="border border-[#A68E85] px-3 py-2 rounded w-20 "
                />
                <span>-</span>
                <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    placeholder="Til"
                    className="border border-[#A68E85] px-3 py-2 rounded w-20 "
                />
                <p className="text-[#524641] font-[OpenSans + text-sm + font-normal]">kr</p>
            </div>
            <div className="flex gap-10">
                <button
                    onClick={handleFilter}
                    className="bg-[#D97852] text-white rounded w-20 h-10  mt-4">
                    Filter
                </button>
                <button onClick={handleReset} className="bg-[#D97852] text-white rounded w-20 h-10  mt-4">
                    Nulstil
                </button>
            </div>

        </>
    );
};