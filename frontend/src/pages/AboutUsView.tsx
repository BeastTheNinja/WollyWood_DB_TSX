import { FigureCard } from "../components/pages/AboutUsComponent/FigureCard"
import Stjerne from '../assets/images/StjerneBilledeOmOs.png'
export const AboutUsView = () => {

    return (
        <>
            <h2 className="text-[#D97852] text-[32px] font-[TitilliumWeb] mb-6 ml-5">Om os</h2>
            <figure className="flex gap-6 ml-5 mr-5 relative">
                <div className="flex-1">
                    <FigureCard />
                </div>
                <div className="flex-1 flex justify-end items-center relative -top-20 my-auto">
                    <img
                        src={Stjerne}
                        alt="Om WollyWood"
                        className="w-83.75 h-83.75 rounded-lg shadow-md"
                    />
                </div>
            </figure>
        </>
    )
}