import React, {useState, useEffect} from 'react';
import useApi from '../utils/useApi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import '../custom-css/movie-list.css'
import '../custom-css/responsive-movies.css'

function MovieList (){
    const api = useApi();
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        api({ method: 'GET', url: '/movie?page=1&limit=12' })
        .then(({ data }) => {
            setMovies(data.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
    return(
        <>
            <Header pageHomeOrMovies={true}/>
            <div className="con-hero-movies relative mt-20 md:mt-0">
                <div className="con-hero-content w-screen bg-sign bg-no-repeat bg-cover bg-center p-10 md:p-24 overflow-hidden">
                    <div className="content-hero relative w-[100%] md:w-[45%] z-[2]">
                        <h3 className='text-white font-bold text-xs md:text-lg mb-2 md:mb-7'>LIST MOVIE OF THE WEEK</h3>
                        <p className='text-white font-normal text-lg md:text-5xl leading-normal'>Experience the Magic of Cinema: Book Your Tickets Today</p>
                    </div>
                </div>
                <div className="con-dot-button absolute bottom-5 right-[50%] flex flex-row gap-x-2 z-[3]">
                    <button className='w-[20px] h-[3px] md:w-[43px] md:h-[6px] bg-[#1D4ED8] rounded-[20px]' type="button"></button>
                    <button className='w-[3px] h-[3px] md:w-[5px] md:h-[5px] bg-white rounded-[50%]' type="button"></button>
                    <button className='w-[3px] h-[3px] md:w-[5px] md:h-[5px] bg-white rounded-[50%]' type="button"></button>
                </div>
                <span className="dark-hero absolute top-0 left-0 w-screen h-full bg-gradient-to-r from-[#000000bf] to-[#000000bf] z-0"></span>
            </div>
            <main className="con-movie-list font-Muslish p-10 md:p-24 overflow-x-hidden overflow-y-hidden">
                <div className="flex flex-col md:flex-row gap-x-5 gap-y-5 p-0">
                    <div className="flex flex-col items-center md:items-start gap-y-3">
                        <label className="form-label font-semibold text-[#4E4B66] font-base" htmlFor="search-movie">Cari Event</label>
                        <div className="flex flex-row justify-center items-center gap-x-2 bg-white border border-[#DEDEDE] rounded-[4px] p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                            <input className="outline-none" type="search" name="" id="" placeholder="New Born Expert"/>
                        </div>
                    </div>
                    <div className="flex flex-col items-center md:items-start gap-y-3 md:gap-y-3">
                        <p className="font-semibold text-[#4E4B66] font-base">Filter</p>
                        <div className="flex flex-col md:flex-row md:justify-center items-center md:h-full md:gap-x-10">
                            <button className='text-sm font-medium text-white bg-blue-700 h-fit py-3 px-6 rounded-[10px]' type="button">Thriller</button>
                            <button className='text-sm font-medium text-[#4E4B66] h-fit py-3 px-6 rounded-[10px]' type="button">Horror</button>
                            <button className='text-sm font-medium text-[#4E4B66] h-fit py-3 px-6 rounded-[10px]' type="button">Romantic</button>
                            <button className='text-sm font-medium text-[#4E4B66] h-fit py-3 px-6 rounded-[10px]' type="button">Adventure</button>
                            <button className='text-sm font-medium text-[#4E4B66] h-fit py-3 px-6 rounded-[10px]' type="button">Sci-Fi</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-x-4 md:grid md:grid-cols-4 md:gap-7 mt-12 md:overflow-x-hidden overflow-x-scroll con-card-movie-list">
                    {movies && movies.map((movie) =>{
                                return <Card id={movie.movie_id} title={movie.movie_name} genres={movie.genres} poster={movie.movie_poster} key={movie.movie_id}/>
                            })}
                </div>
                <div className="flex flex-row justify-center items-center md:gap-x-7 gap-x-2 my-20">
                    <button type="button" className="bg-blue-700 text-white w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-[50%]" >1</button>
                    <button type="button" className="text-[#A0A3BD] bg-[#F9FAFB] rounded-full w-[30px] h-[30px] md:w-[40px] md:h-[40px]">2</button>
                    <button type="button" className="text-[#A0A3BD] bg-[#F9FAFB] rounded-full w-[30px] h-[30px] md:w-[40px] md:h-[40px]">3</button>
                    <button type="button" className="text-[#A0A3BD] bg-[#F9FAFB] rounded-full w-[30px] h-[30px] md:w-[40px] md:h-[40px]">4</button>
                    <button type="button" className="bg-blue-700 text-white w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-[50%]">&#8594;</button>
                </div>
                <article className="con-subscribe">
                    <p>Subscribe to our newsletter</p>
                    <form>
                        <input type="text" name="first-name" id="first-name" placeholder="First name"/>
                        <input type="email" name="email" id="email" placeholder="Email Address"/>
                        <input className="btn-submit-movie-list" type="submit" value="Subscribe Now"/>
                    </form>
                </article>
            </main>
            <Footer />
        </>
    )
}

export default MovieList;