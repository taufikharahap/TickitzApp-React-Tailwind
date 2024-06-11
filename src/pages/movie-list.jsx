import React, {useState, useEffect} from 'react';
import useApi from '../utils/useApi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import '../custom-css/movie-list.css'
import '../custom-css/responsive-movies.css'
import Carousel from '../components/Carousel';
import hero1 from '../assets/images/hero1.png'
import hero2 from '../assets/images/Rectangle-613.png'

function MovieList (){
    const api = useApi();
    const [movies, setMovies] = useState(null);
    const [totalData, setTotalData] = useState(0)
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(4)
    const [genre, setGenre] = useState('')
    const [nameMovie, setNameMovie] = useState('')


    const totalButton = [...Array(Math.ceil(totalData/limit))]

    useEffect(() => {
        api({ method: 'GET', url: `/movie?page=1&limit=4` })
        .then(({ data }) => {
            setMovies(data.data)
            setTotalData(parseInt(data.meta.total))
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const showGenreMovie = (evt, name) => {
        setTotalData(0)
        setGenre(name)
       
        let tablinks;
        let i;
        
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("text-white", "text-[#4E4B66]");
            tablinks[i].className = tablinks[i].className.replace("bg-blue-700", "");
        }
        
        evt.currentTarget.classList.add("bg-blue-700");
        evt.currentTarget.classList.add("text-white");
        evt.currentTarget.classList.remove("text-[#4E4B66]");
        
        api({ method: 'GET', url: `/movie/search/movie?page=${page}&limit=${limit}&genre=${name}&name=${nameMovie}`})
        .then(({ data }) => {
            setMovies(data.data)
            setTotalData(parseInt(data.meta.total))
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const searchMovies = (evt) => {
        setTotalData(0)
        setNameMovie(evt.target.value)

        api({ method: 'GET', url: `/movie/search/movie?page=${page}&limit=${limit}&name=${evt.target.value}&genre=${genre}`})
        .then(({ data }) => {
            setMovies(data.data)
            setTotalData(parseInt(data.meta.total))
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const handlePagination = (e) => {
        e.preventDefault()

        const btnElement = document.querySelectorAll('.btn-pagination')

        for (let i = 0; i < btnElement.length; i++) {
            btnElement[i].className = btnElement[i].className.replace("bg-blue-700", "");
            btnElement[i].className = btnElement[i].className.replace("text-white", "");
        }

        e.target.classList.add("bg-blue-700", "text-white");


        api({ method: 'GET', url: `/movie?page=${e.target.id}&limit=${limit}`})
            .then(({ data}) => {
                setMovies(data.data)
                setPage(parseInt(e.target.id))
            })
            .catch((err) => {
                console.log(err)
            })

    }

    const handleNext = (e) => {

        if(totalButton.length == page){
            return;
        }

        const btnElement = document.querySelectorAll('.btn-pagination')
        
        btnElement[page].classList.add("bg-blue-700", "text-white");
        btnElement[page - 1].className = btnElement[page - 1].className.replace("text-white", "text-[#4E4B66]");
        btnElement[page - 1].className = btnElement[page - 1].className.replace("bg-blue-700", "");
        
        api({ method: 'GET', url: `/movie/search/movie?page=${page+1}&limit=${limit}&name=${nameMovie}&genre=${genre}`})
            .then(({ data}) => {
                setMovies(data.data)
                setPage(page + 1)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const dataCarousel = [
        {
            title : "LIST MOVIE OF THE WEEK",
            content : "Experience the Magic of Cinema: Book Your Tickets Today",
            img : hero1
        },
        {
            title : "LIST MOVIE OF THE WEEK",
            content : "Experience the Magic of Cinema: Book Your Tickets Today",
            img : hero2
        },
        {
            title : "LIST MOVIE OF THE WEEK",
            content : "Experience the Magic of Cinema: Book Your Tickets Today",
            img : hero1
        }
    ]
    
    return(
        <>
            <Header pageHomeOrMovies={true}/>
            <Carousel autoSlide={true}>
                {dataCarousel.map((e, i) => {
                    return (
                        <div key={i} className="relative w-screen flex overflow-x-hidden">
                            <div className="w-screen">
                                <img className="w-screen md:h-[415px] h-[275px]" src={e.img} alt="img" />
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center md:ps-28 p-5 bg-[#0000008f]">
                                <h3 className='w-[100%] md:w-[45%] text-white font-bold text-xs md:text-lg mb-3 md:mb-5'>{e.title}</h3>
                                <p className='w-[100%] md:w-[45%] text-white font-normal text-lg md:text-5xl leading-normal'>{e.content}</p>
                            </div>
                        </div>
                    )
                })}
            </Carousel>
            <main className="con-movie-list font-Muslish p-10 md:p-24 overflow-x-hidden overflow-y-hidden">
                <div className="flex flex-col md:flex-row gap-x-5 gap-y-5 p-0">
                    <div className="flex flex-col md:items-start gap-y-3">
                        <label className="form-label font-semibold text-[#4E4B66] font-base" htmlFor="search-movie">Cari Event</label>
                        <div className="flex flex-row items-center gap-x-2 bg-white border border-[#DEDEDE] rounded-[4px] md:p-4 p-2 ps-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                            <input className="w-full outline-none placeholder:text-sm md:placeholder:text-base" type="search" name="" id="" placeholder="New Born Expert" onChange={event => searchMovies(event)}/>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-y-3 md:gap-y-3">
                        <p className="font-semibold text-[#4E4B66] md:ms-6 ms-0 font-base">Filter</p>
                        <div className="flex flex-wrap md:flex-row md:justify-center items-center md:h-full md:gap-x-10 gap-3">
                            <button className='tablinks border md:border-none text-sm font-medium text-[#4E4B66] h-fit md:py-3 py-2 md:px-6 px-3 rounded-[10px]' type="button" onClick={(event) => {showGenreMovie(event, "Thriller")}}>Thriller</button>
                            <button className='tablinks border md:border-none text-sm font-medium text-[#4E4B66] h-fit md:py-3 py-2 md:px-6 px-3 rounded-[10px]' type="button" onClick={(event) => {showGenreMovie(event, "Horror")}}>Horror</button>
                            <button className='tablinks border md:border-none text-sm font-medium text-[#4E4B66] h-fit md:py-3 py-2 md:px-6 px-3 rounded-[10px]' type="button" onClick={(event) => {showGenreMovie(event, "Romance")}}>Romantic</button>
                            <button className='tablinks border md:border-none text-sm font-medium text-[#4E4B66] h-fit md:py-3 py-2 md:px-6 px-3 rounded-[10px]' type="button" onClick={(event) => {showGenreMovie(event, "Adventure")}}>Adventure</button>
                            <button className='tablinks border md:border-none text-sm font-medium text-[#4E4B66] h-fit md:py-3 py-2 md:px-6 px-3 rounded-[10px]' type="button" onClick={(event) => {showGenreMovie(event, "Sc-Fi")}}>Sci-Fi</button>
                        </div>
                    </div>
                </div>
                <div className="relative grid grid-cols-4 md:gap-x-4 gap-56 mt-12 md:overflow-x-hidden overflow-x-scroll con-card-movies min-h-[400px]">
                    {movies ? movies.map((movie) =>{
                        return <Card id={movie.movie_id} title={movie.movie_name} genres={movie.genres} poster={movie.movie_poster} key={movie.movie_id}/>
                    }) 
                    :
                    <div className=' absolute w-full h-full flex flex-col justify-center items-center'>
                        <span className='text-blue-600 bg-blue-50 p-5'>Maaf, movie tidak ditemukan !</span>
                    </div> 
                    }
                </div>
                <div className="flex flex-row justify-center items-center md:gap-x-7 gap-x-2 my-20">
                    {
                        totalData && totalButton.length > 1 ? 
                            totalButton.map((number, index) => {
                                return <button 
                                            key={index + 1} 
                                            id={index + 1} 
                                            type="button" 
                                            className={`btn-pagination text-[#A0A3BD] bg-[#F9FAFB] ${index == 0 ? 'bg-blue-700 text-white' : ''} rounded-full w-[30px] h-[30px] md:w-[40px] md:h-[40px]`}
                                            onClick={e => handlePagination(e)}
                                        >
                                            {index + 1}
                                        </button>
                            }) 
                            
                            : ''
                    }

                    {
                        totalData && totalButton.length != page ?
                            <button type="button" className="btn-next bg-blue-700 text-white w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-[50%]" onClick={handleNext}>&#8594;</button>
                        : ''
                    }
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