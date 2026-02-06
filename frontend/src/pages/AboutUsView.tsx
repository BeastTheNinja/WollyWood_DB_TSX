import { FigureCard } from "../components/pages/AboutUsComponent/FigureCard"
import Stjerne from '../assets/images/StjerneBilledeOmOs.png'
import { Title } from "../components/Title"
export const AboutUsView = () => {

    return (
        <>
            <Title title="Om os" />
            <figure className="flex gap-6 ml-5 mr-5 relative">
                <div className="flex-1">
                    <FigureCard />
                </div>
                <div className="flex-1 flex justify-end items-center">
                    <img
                        src={Stjerne}
                        alt="Om WollyWood"
                        className="w-83.75 h-83.75 rounded-lg shadow-md"
                        width={335}
                        height={335}
                        sizes="335px"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            </figure>
        </>
    )
}