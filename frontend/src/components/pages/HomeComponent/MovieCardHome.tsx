import parse from 'html-react-parser';
import type { Moviedata } from '../../../types/movieType';

interface MovieCardProps {
    movie: Moviedata;
}

export const MovieCardHome = ({ movie }: MovieCardProps) => {
    return (
        <div className="flex gap-4">
            <img
                className="w-52 h-auto object-cover"
                src={movie.image}
                alt={movie.name}
            />
            <div className="flex flex-col gap-2">
                <h4 className="font-bold text-[#524641] text-xl font-[OpenSans]">
                    {movie.name}
                </h4>
                <div className="text-[#524641] font-[OpenSans]">
                  {movie.description && parse(movie.description)}
                </div>
                <div className="text-[#524641] font-[OpenSans] flex justify-start gap-2">
                    Genre: {movie.genres.map((genre) => (
                        <p key={genre.id}>{genre.title}</p>
                    ))}
                </div>
                <button className="bg-[#D1B3A7] font-[OpenSans] font-bold text-[#524641] border border-[#524641] px-4 py-2 rounded mt-auto w-fit">
                    Læs mere
                </button>
            </div>
        </div>
    );
};
