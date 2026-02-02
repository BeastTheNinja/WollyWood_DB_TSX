import '../../style/Fonts.css'
import { Nav } from '../Nav/Nav'
import { FaShoppingBasket } from "react-icons/fa";

export const Header = () => {


    return (
        <>
            <header className='flex items-end justify-between border-b border-[#5C1F06] relative ml-5 mr-5 mt-0 mb-0'>
                <h1 className='text-[#D97852] font-[TitilliumWeb] text-[54px]'>WALLYWOOD</h1>
                <div className='flex items-center gap-4'>

                    <FaShoppingBasket className='absolute right-0 top-4 w-5 h-4' />
                </div>
                <Nav />
            </header>
        </>
    )
}