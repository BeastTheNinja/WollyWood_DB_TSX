import { useState, useContext } from "react";
import type { SortOption } from "../../../types/movieType";
import { DarkModeContext } from '../../context/darkmodeContext'

type DropdownProps = {
    onSelectSort: (value: SortOption | null) => void;
};

export const Dropdown = ({ onSelectSort }: DropdownProps) => {
    const [selectedSort, setSelectedSort] = useState<SortOption | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    
    // Get dark mode state from context
    const darkModeContext = useContext(DarkModeContext)
    const isDarkMode = darkModeContext?.isDarkMode ?? false

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
                <button onClick={toggleDropdown} className={`rounded border text-xl w-48 h-auto px-4 py-2 text-left ${isDarkMode ? 'bg-gray-800 border-gray-600 text-gray-200' : 'bg-[#FFFFFF] border-[#CCCCCC]'}`}>
                    {getButtonText()}
                </button>
                {isOpen && (
                    <ul className={`absolute top-9 rounded border mt-2 w-48 shadow-lg z-10 ${isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'}`}>
                        {dropdownLinks.map((link) => (
                            <li key={link.name}>
                                <button
                                    type="button"
                                    onClick={() => handleSelect(link.value)}
                                    className={`block w-full text-left px-4 py-2 ${isDarkMode ? 'hover:bg-gray-700 text-gray-200' : 'hover:bg-gray-200'}`}
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