import React, {useState, useEffect} from 'react';
import useApi from '../utils/useApi';
import Header from '../components/Header';
import imageHero35 from '../assets/images/Rectangle 35.png'
import imageHero37 from '../assets/images/Rectangle 37.png'
import imageHero36 from '../assets/images/Rectangle 36.png'
import imageHero38 from '../assets/images/Rectangle 38.png'
import iconCheckShild from '../assets/images/icons/Shield-check.svg'
import iconchecCircle from '../assets/images/icons/icon-chec-circle.svg'
import iconSpeech from '../assets/images/icons/icons8-speech-bubble 1.svg'
import '../custom-css/home.css'
import '../custom-css/responsive-home.css'
import Card from '../components/Card';
import Footer from '../components/Footer';



function Home () {
    const api = useApi();
    const [movies, setMovies] = useState(null);
    const [moviesUpcomming, setMoviesUpcomming] = useState(null);
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)

    const getMovies = () =>{
        api({ method: 'GET', url: '/movie?page=1&limit=4' })
            .then(({ data }) => {
                setMovies(data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const getMoviesUpcomming = () =>{
        api({ method: 'GET', url: `movie/?page=${page}&limit=4`})
            .then(({ data }) => {
                setMoviesUpcomming(data.data)
                setTotalPage(Math.ceil(data.meta.total/4))
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const nextMoviesUpcomming = () =>{
        if (page == totalPage) {
            return
        }
        setPage(page + 1)
        console.log(`next`)
    }
    
    const prevMoviesUpcomming = () =>{
        if (page == 1) {
            return
        }
        setPage(page - 1)
        console.log(`prev`)
    }

    useEffect(() => {
        getMovies()
        getMoviesUpcomming()
    }, [])

    useEffect(() => {
        getMoviesUpcomming()
    }, [page])

    return (
        <>
            <Header pageHomeOrMovies={true}/>
            <main className='con-page-home'>
                <article className="con-hero">
                    <section className="hero-words">
                        <h2>MOVIE TICKET PURCHASES #1 IN INDONESIA</h2>
                        <p className="motivation">Experience the Magic of Cinema: Book Your Tickets Today</p>
                        <p>Sign up and get the ticket with a lot of discount</p>
                    </section>
                    <section className="hero-images">
                        <div className="sub-images">
                            <img className="image-litle" src={imageHero35} alt=""/>
                            <img className="image-large" src={imageHero37} alt=""/>
                        </div>
                        <div className="sub-images">
                            <img className="image-large" src={imageHero36} alt=""/>
                            <img className="image-litle" src={imageHero38} alt=""/>
                        </div>
                    </section>
                </article>
                <article className="con-why">
                    <h2>WHY CHOOSE US</h2>
                    <p className="sub-title">Unleashing the Ultimate Movie Experience</p>
                    <section className="con-services">
                        <div className="services">
                            <div className="con-img-services">
                                <img src={iconCheckShild} alt=""/>
                            </div>
                            <p className="title-services">Guaranteed</p>
                            <p className="sub-title-services">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
                        </div>
                        <div className="services">
                            <div className="con-img-services">
                                <img src={iconchecCircle} alt=""/>
                            </div>
                            <p className="title-services">Affordable</p>
                            <p className="sub-title-services">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
                        </div>
                        <div className="services">
                            <div className="con-img-services">
                                <img src={iconSpeech} alt=""/>
                            </div>
                            <p className="title-services">24/7 Customer Support</p>
                            <p className="sub-title-services">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
                        </div>
                    </section>
                </article>
                <article className="con-movies">
                    <h2 className="title">MOVIES</h2>
                    <p className="sub-title sub-title-movie">Exciting Movies That Should Be Watched Today</p>
                    <div className="relative grid grid-cols-4 md:gap-x-4 gap-56 mt-12 md:overflow-x-hidden overflow-x-scroll con-card-movies min-h-[300px]">
                        {movies ?  movies.map((movie) =>{
                            return <Card id={movie.movie_id} title={movie.movie_name} genres={movie.genres} poster={movie.movie_poster} key={movie.movie_id}/>
                        }) :
                        <div className=' absolute w-full h-full flex flex-col justify-center items-center'>
                            <span className='text-blue-600 bg-blue-50 p-5'>Movie tidak ditemukan, terjadi kesalahan server !</span>
                        </div>
                    }
                    </div>
                    <a href='/movies' className="link-view-all">View All <span>&#8594;</span></a>
                </article>
                <article className="con-movies-upcoming">
                    <h2 className="title">UPCOMING MOVIES</h2>
                    <p className="sub-title sub-title-movie">Exciting Movie Coming Soon</p>
                    <div className="btn-movies-upcoming">
                        <button className={`btn-left ${page == 1 ? "bg-slate-500" : "bg-[#1D4ED8] hover:bg-blue-600"} `} onClick={prevMoviesUpcomming}><span className='-mt-1' >&#8592;</span></button>
                        <button className={`btn-right ${page == totalPage ? "bg-slate-500" : "bg-[#1D4ED8] hover:bg-blue-600 "}`} onClick={nextMoviesUpcomming}><span className='-mt-1' >&#8594;</span></button>
                    </div>
                    <div className="relative grid grid-cols-4 md:gap-x-4 gap-56 mt-12 md:overflow-x-hidden overflow-x-scroll con-card-movies min-h-[300px]">
                    {moviesUpcomming ? moviesUpcomming.map((movie) =>{
                            return <Card id={movie.movie_id} title={movie.movie_name} genres={movie.genres} poster={movie.movie_poster} release={movie.release_date} isUpcoming={true} key={movie.movie_id}/>
                        }) :
                        <div className=' absolute w-full h-full flex flex-col justify-center items-center'>
                            <span className='text-blue-600 bg-blue-50 p-5'>Movie tidak ditemukan, terjadi kesalahan server !</span>
                        </div>
                    }
                    </div>
                </article>
                <article className="con-subscribe">
                    <p>Subscribe to our newsletter</p>
                    <form>
                        <input type="text" name="first-name" id="first-name" placeholder="First name"/>
                        <input type="email" name="email" id="email" placeholder="Email Address"/>
                        <input type="submit" value="Subscribe Now"/>
                    </form>
                </article>
            </main>
            <Footer/>
        </>
    )
}

export default Home;