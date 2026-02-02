import { FaFacebookSquare, FaInstagramSquare, FaPinterestSquare, FaTwitterSquare } from "react-icons/fa"

export const Footer = () => {


    return (
        <footer className="flex justify-between items-center p-4 border-t border-[#D1B3A7] relative m-5">
            <div className="grid grid-cols-2 gap-20 relative">
                <ul>
                    <p className="font-[TitilliumWeb] text-[#D97852] text-[16px] font-bold ">WALLYWOOD</p>
                    <li className="font-[OpenSans] text-sm">
                        Øster Uttrupvej 1
                    </li>
                    <li className="font-[OpenSans] text-sm">
                        9000 Aalborg
                    </li>
                </ul>
                <ul>
                    <li className="font-[OpenSans] text-sm">
                        CVR: 12345678
                    </li>
                    <li className="font-[OpenSans] text-sm">
                        MAIL: info@plakatshoppen.dk
                    </li>
                    <li className="font-[OpenSans] text-sm">
                        Mobil: +45 9812 3456
                    </li>
                </ul>
            </div>
            <div className="flex gap-2 absolute right-0 top-1">
                <FaTwitterSquare size={30} color="#CCCCCC" />
                <FaFacebookSquare size={30} color="#CCCCCC" />
                <FaInstagramSquare size={30} color="#CCCCCC" />
                <FaPinterestSquare size={30} color="#CCCCCC" />
            </div>
        </footer>
    )
}