import '../../style/Fonts.css'
import { Nav } from '../Nav/Nav'
import { FaShoppingBasket } from "react-icons/fa";

export const Header = () => {
    return (
        <>
            <header className='flex justify-between items-center p-4 divide-amber-500 border-b-2 border-[#D97852] relative m-5'>
                <h1 className='text-[#D97852] font-[Titillium] text-[54px] relative left-5'>WALLYWOOD</h1>
                {/* kurv icon */}
                <FaShoppingBasket className='absolute right-10 top-4 w-5 h-4' />

                <Nav />
            </header>
        </>
    )
}