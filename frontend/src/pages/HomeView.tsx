import Hero from '.././assets/images/curtain.jpg';
import { Title } from "../components/pages/HomeComponent/Title";
import { MovieCard } from "../components/pages/HomeComponent/MovieCard";
import { useFetchPosters } from "../data/useFetchPosters";

export const HomeView = () => {
    const { posters, loading, error } = useFetchPosters(2);

    return (
        <>
            <div className='ml-5 mr-5 mt-2 mb-4'>
                <img className='w-full h-auto object-cover' src={Hero} alt="curtain_image" />
            </div>
            <Title title="Seneste Nyt..." />
            <div className="ml-5 mr-5 grid grid-cols-2 gap-6">
                {loading && <p className="text-[#524641] font-[OpenSans]">Indlæser...</p>}
                {error && <p className="text-red-500 font-[OpenSans]">Fejl: {error}</p>}
                {posters.map((poster) => (
                    <MovieCard key={poster.id} movie={poster} />
                ))}
            </div>
        </>
    )
}