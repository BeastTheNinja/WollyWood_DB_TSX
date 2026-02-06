import Hero from '.././assets/images/curtain.jpg';
import { Title } from "../components/Title";
import { MovieCardHome } from "../components/pages/HomeComponent/MovieCardHome";
import { useFetchData } from "../data/useFetchData";
import type { Moviedata } from '../types/movieType';

export const HomeView = () => {
    const { data, loading, error } = useFetchData<Array<Moviedata>>(`http://localhost:3000/posters?sort_key=random&limit=2&attributes=id,name,description,image`);

    return (
        <>
            <div className='ml-5 mr-5 mt-2 mb-4'>
                <img
                    className='w-full h-auto object-cover'
                    src={Hero}
                    alt="curtain_image"
                    width={1600}
                    height={900}
                    sizes="100vw"
                    fetchPriority="high"
                    loading="eager"
                    decoding="async"
                />
            </div>
            <Title title="Seneste Nyt..." />
            <div className="ml-5 mr-5 grid grid-cols-2 gap-6">
                {loading && <p className="text-[#3B2A22] font-[OpenSans]">Indlæser...</p>}
                {error && <p className="text-red-500 font-[OpenSans]">Fejl: {error}</p>}
                {data && data.map((poster) => (
                    <MovieCardHome key={poster.id} movie={poster} />
                ))}
            </div>
        </>
    )
}