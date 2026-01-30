import { useState } from "react";
import type { SortOption } from "../../../types/movieType";

type DropdownProps = {
    onSelectSort: (value: SortOption | null) => void;
};

export const Dropdown = ({ onSelectSort }: DropdownProps) => {
    const [selectedSort, setSelectedSort] = useState<SortOption | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const dropdownLinks: { name: string; value: SortOption }[] = [
        { name: "Pris: Lav til Høj", value: "price_asc" },
        { name: "Pris: Høj til Lav", value: "price_desc" },
    ];

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (value: SortOption) => {
        setSelectedSort(value);
        onSelectSort(value);
        setIsOpen(false);
    };

    const handleReset = () => {
        setSelectedSort(null);
        onSelectSort(null);
        setIsOpen(false);
    };

    const getButtonText = () => {
        if (!selectedSort) return "Sortér";
        return dropdownLinks.find((link) => link.value === selectedSort)?.name || "Sortér";
    };

    return (
        <>
            <div className=" relative inline-block text-left mr-5 mb-4 mt-2">
                <button onClick={toggleDropdown} className="rounded bg-[#FFFFFF] border border-[#CCCCCC] text-xl w-48 h-auto px-4 py-2 text-left">
                    {getButtonText()}
                </button>
                {isOpen && (
                    <ul className="absolute top-9  bg-white rounded border border-gray-300 mt-2 w-48 shadow-lg z-10">
                        {dropdownLinks.map((link) => (
                            <li key={link.name}>
                                <button
                                    type="button"
                                    onClick={() => handleSelect(link.value)}
                                    className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                                >
                                    {link.name}
                                </button>
                            </li>
                        ))}
                        <li className="border-t border-gray-300">
                            <button
                                type="button"
                                onClick={handleReset}
                                className="block w-full text-left px-4 py-2 hover:bg-gray-200 text-gray-600"
                            >
                                Nulstil
                            </button>
                        </li>
                    </ul>
                )}
            </div>
        </>
    );
};