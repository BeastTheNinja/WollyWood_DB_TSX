import { useEffect, useState } from "react"
import Hero from '.././assets/images/curtain.jpg';
import { Title } from "../components/pages/HomeComponent/Title";
import type { Moviedata } from '../types/movieType'
import parse from 'html-react-parser';

export const HomeView = () => {

    const [movieData, setMovieData] = useState<Array<Moviedata>>();

    useEffect(() => {
        const url = 'http://localhost:3000/posters?sort_key=random&limit=2&attributes=id,name,description,image';
        fetch(url)
            .then((res) => res.json())
            .then((data) => setMovieData(data))

    }, [])

    return (
        <>
            <div className='ml-5 mr-5 mt-2 mb-4'>
                <img className='w-full h-auto object-cover' src={Hero} alt="curtain_image" />
            </div>
            <Title title="Seneste Nyt..." />
            <div className="ml-5 mr-5 grid grid-cols-2 gap-6">

                {movieData &&
                    movieData.map((item) => {
                        return (
                            <div key={item.id} className="flex gap-4">
                                <img className="w-52 h-auto object-cover" src={item.image} alt={item.name}></img>
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-bold text-[#524641] text-xl font-[OpenSans]">{item.name}</h4>
                                    <div className="text-[#524641] font-[OpenSans]">{parse(item.description)}</div>
                                    <div className="text-[#524641] font-[OpenSans] flex justify-start gap-2">Genre: {item.genres.map((genre) => <p>{genre.title}</p>)}</div>
                                    <button className="bg-[#D1B3A7] font-[OpenSans] text-[#524641] px-4 py-2 rounded mt-auto w-fit">Læs mere</button>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </>
    )
}