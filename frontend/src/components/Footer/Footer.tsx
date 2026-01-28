import { FaFacebookSquare, FaInstagramSquare, FaPinterestSquare, FaTwitterSquare } from "react-icons/fa"

export const Footer = () => {


    return (
        <footer className="flex justify-between items-center p-4 divide-amber-500 border-t-2 border-[#D97852] relative m-5">
            <div className="grid grid-cols-2 gap-20 relative">
                <ul>
                    <p>WALLYWOOD</p>
                    <li>
                        Øster Uttrupvej 1
                    </li>
                    <li>
                        9000 Aalborg
                    </li>
                </ul>
                <ul>
                    <li>
                        CVR: 12345678
                    </li>
                    <li>
                        MAIL: info@plakatshoppen.dk
                    </li>
                    <li>
                        Mobil: +45 9812 3456
                    </li>
                </ul>
            </div>
            <div className="flex gap-2 absolute right-4 top-1">
                <FaTwitterSquare size={30} />
                <FaFacebookSquare size={30} />
                <FaInstagramSquare size={30} />
                <FaPinterestSquare size={30} />
            </div>
        </footer>
    )
}