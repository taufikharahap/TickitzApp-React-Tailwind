import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import '../custom-css/movie-list.css'

function MovieList (){
    const [movies, setMovies] = useState(null);

    useEffect(() => {
            axios
                .request({
                    headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTAyNzE0NzcsImV4cCI6MTcxMDI4OTQ3N30.JMzVFCNYZyelSx6eQy4Qo-zE1XnIXG_Yg1VVz-s6D74`
                    },
                    method: "GET",
                    url: `http://localhost:8001/movie?page=1&limit=12`
                }).then(response => {
                    setMovies(response.data.data)
                
                }).catch((err) => {
                    console.log(err)
                })
    }, [])
    return(
        <>
            <Header />
            <div className="con-hero-movies relative">
                <div className="con-hero-content w-screen bg-sign bg-no-repeat bg-cover bg-center p-24 overflow-hidden">
                    <div className="content-hero relative w-[45%] z-[2]">
                        <h3 className='text-white font-bold text-lg mb-7'>LIST MOVIE OF THE WEEK</h3>
                        <p className='text-white font-normal text-5xl leading-normal'>Experience the Magic of Cinema: Book Your Tickets Today</p>
                    </div>
                </div>
                <div className="con-dot-button absolute bottom-5 right-[50%] flex flex-row gap-x-2 z-[3]">
                    <button className='w-[43px] h-[6px] bg-[#1D4ED8] rounded-[20px]' type="button"></button>
                    <button className='w-[5px] h-[5px] bg-white rounded-[50%]' type="button"></button>
                    <button className='w-[5px] h-[5px] bg-white rounded-[50%]' type="button"></button>
                </div>
                <span className="dark-hero absolute top-0 left-0 w-screen h-full bg-gradient-to-r from-[#000000bf] to-[#000000bf] z-0"></span>
            </div>
            <main className="con-movie-list font-Muslish p-24 overflow-x-hidden overflow-y-hidden">
                <div className="flex flex-row gap-x-5 p-0">
                    <div className="flex flex-col gap-y-3">
                        <label className="form-label font-semibold text-[#4E4B66] font-base" htmlFor="search-movie">Cari Event</label>
                        <div className="flex flex-row justify-center items-center gap-x-2 bg-white border border-[#DEDEDE] rounded-[4px] p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                            <input className="outline-none" type="search" name="" id="" placeholder="New Born Expert"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <p className="font-semibold text-[#4E4B66] font-base">Filter</p>
                        <div className="flex flex-row justify-center items-center md:h-full gap-x-10">
                            <button className='text-sm font-medium text-white bg-blue-700 h-fit py-3 px-6 rounded-[10px]' type="button">Thriller</button>
                            <button className='text-sm font-medium text-[#4E4B66] h-fit py-3 px-6 rounded-[10px]' type="button">Horror</button>
                            <button className='text-sm font-medium text-[#4E4B66] h-fit py-3 px-6 rounded-[10px]' type="button">Romantic</button>
                            <button className='text-sm font-medium text-[#4E4B66] h-fit py-3 px-6 rounded-[10px]' type="button">Adventure</button>
                            <button className='text-sm font-medium text-[#4E4B66] h-fit py-3 px-6 rounded-[10px]' type="button">Sci-Fi</button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-7 mt-12 con-card-movie-list">
                    {movies && movies.map((movie) =>{
                                return <Card id={movie.movie_id} title={movie.movie_name} genres={movie.genres} poster={movie.movie_poster} key={movie.movie_id}/>
                            })}
                </div>
                <div className="row row-cols-auto column-gap-3 justify-content-center mt-5">
                    <button type="button" className="btn fw-light fs-6 py-2 px-3 rounded-5" >1</button>
                    <button type="button" className="btn bg-body-secondary text-secondary fw-light fs-6 py-2 px-3 rounded-5">2</button>
                    <button type="button" className="btn bg-body-secondary text-secondary fw-light fs-6 py-2 px-3 rounded-5">3</button>
                    <button type="button" className="btn bg-body-secondary text-secondary fw-light fs-6 py-2 px-3 rounded-5">4</button>
                    <button type="button" className="btn bg-body-secondary fw-light fs-6  py-2 rounded-5">&#8594;</button>
                </div>
                <article className="con-subscribe">
                    <p>Subscribe to our newsletter</p>
                    <form>
                        <input type="text" name="first-name" id="first-name" placeholder="First name"/>
                        <input type="email" name="email" id="email" placeholder="Email Address"/>
                        <input type="submit" value="Subscribe Now"/>
                    </form>
                </article>
            </main>
            <Footer />
        </>
    )
}

export default MovieList;