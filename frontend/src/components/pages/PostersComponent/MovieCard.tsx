import type { Moviedata } from '../../../types/movieType';

interface MovieCardProps {
    movie: Moviedata;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
    return (
        <div className="flex flex-col gap-2 h-full">
            <div className="w-full h-80 overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    src={movie.image}
                    alt={movie.name}
                />
            </div>
            <div className="flex flex-col gap-2 flex-1">
                <h4 className="font-bold text-[#524641] text-lg font-[OpenSans] text-center">
                    {movie.name}
                </h4>
                <p className="text-[#524641] font-[OpenSans] text-lg font-bold text-center">
                    {movie.price}kr
                </p>
                <button className="bg-[#D1B3A7] font-[OpenSans] text-[#524641] border border-[#524641] px-4 py-2 rounded mt-auto w-fit self-center">
                    Læg i kurv
                </button>
            </div>
        </div>
    );
};
