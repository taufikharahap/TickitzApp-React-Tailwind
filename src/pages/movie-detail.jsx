import React, {useState, useEffect} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import showFormattedDate from "../utils/format-date";
import axios from 'axios'
import { useParams } from 'react-router-dom'
import imageHero from '../assets/images/Rectangle-613.png'
import iconEbv from '../assets/images/icons/ebv.id 2.png'
import iconEbvDetail from '../assets/images/icons/EBV.id-detail.png'
import iconCinemaDetail from '../assets/images/icons/Cineone 21-detail.png'
import iconCinema2 from '../assets/images/icons/CineOne21 2.png'
import iconHiflixDetail from '../assets/images/icons/Hiflix Cinema-detail.png'
import iconHiflixWhite from '../assets/images/icons/hiflix-white.svg'
import iconHiflix2 from '../assets/images/icons/hiflix 2.png'
import iconLocation from '../assets/images/icons/entypo_location.svg'
import iconForward from '../assets/images/icons/Forward.png'
import iconForwardDown from '../assets/images/icons/Forward-down.png'
import '../custom-css/detail-movie.css'
import '../custom-css/responsive-detail-movie.css'


function MovieDetail () {

    const params = useParams()
    const [movie, setMovie] = useState(null);

    useEffect(() => {
            axios
                .request({
                    headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTAyNzE0NzcsImV4cCI6MTcxMDI4OTQ3N30.JMzVFCNYZyelSx6eQy4Qo-zE1XnIXG_Yg1VVz-s6D74`
                    },
                    method: "GET",
                    url: `http://localhost:8001/movie/${params.id}`
                }).then(response => {
                    setMovie(response.data.data[0])
                    console.log(response.data.data[0])
                
                }).catch((err) => {
                    console.log(err)
                })
    }, [params])

    return (
            <>
                <Header/>
                <div className="con-hero-detail-movie">
                    <img src={movie && movie.movie_poster} alt=""/>
                </div>
                <main className="con-movie-detail">
                    <article className ="con-detail-movie">
                        <div className ="con-header-movie">
                            <div className ="con-poster-movie">
                                <img src={movie && movie.movie_poster} alt=""/>
                            </div>
                            <div className ="con-right-header">
                                <h2 className ="movie-name">{movie && movie.movie_name}</h2>
                                <div className ="con-genre">
                                    {movie && movie.genres.split(', ').map((genre) => <p key={genre}>{genre}</p>)}
                                </div>
                                <div className ="con-sub-detail">
                                    <div className ="sub-detail">
                                        <p className ="title">Release date</p>
                                        <p>{movie && movie.release}</p>
                                    </div>
                                    <div className ="sub-detail right">
                                        <p className ="title">Directed by</p>
                                        <p>{movie && movie.directed}</p>
                                    </div>
                                </div>
                                <div className ="con-sub-detail">
                                    <div className ="sub-detail">
                                        <p className ="title">Duration</p>
                                        <p>{movie && movie.duration.hours} hours {movie && movie.duration.minutes} minutes</p>
                                    </div>
                                    <div className ="sub-detail right">
                                        <p className ="title">Casts</p>
                                        <p>{movie && movie.casts.map((cast, index) => {
                                                if (movie.casts.length - 1 != index){
                                                    cast += ', ';
                                                }
                                                return cast += '';
                                            } )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className ="con-sinopsis">
                            <h4 className ="title-synopsi">Synopsis</h4>
                            <p className ="synopsis">{movie && movie.synopsis}</p>
                        </div>
                    </article>
                    <article className ="con-booking">
                        <h2 className ="title-booking">Book Tickets</h2>
                        <form action="" className ="form-date">
                            <h4 className ="title-filter-mobile">Showtimes and Tickets</h4>
                            <div className ="con-input">
                                <label className ="title-input" htmlFor="input-date">Choose Date</label>
                                <input id="input-date" type="date" name="date" value="2021-07-20"/>
                            </div>
                            <div className ="con-input">
                                <label className ="title-input" htmlFor="input-time">Choose Time</label>
                                <input type="time" name="input-time" id="input-time" value="08:30"/>
                            </div>
                            <div className ="con-input">
                                <label className ="title-input" htmlFor="input-location">Choose Location</label>
                                <div className ="con-location">
                                    <img src={iconLocation} alt=""/>
                                    <select name="input-location" id="input-location" className ="input-location">
                                        <option value="purwokerto">Purwokerto</option>
                                        <option value="medan">Medan</option>
                                    </select>
                                </div>
                            </div>
                            <input className ="btn-submit" type="submit" value="Filter"/>
                        </form>
                        <section className ="con-cinema">
                            <p className ="title-input">Choose Cinema <span className ="result">39 Result</span></p>
                            <span className ="result" id="result-mobile">39 Result</span>
                            <form className ="form-list-cinema" action="">
                                <div className ="con-btn-list-cinema">
                                    <label className ="con-btn-cinema" htmlFor="ebuid">
                                        <input id="ebuid" type="checkbox" name="ebuid" value="ebuid"/>
                                        <div className ="btn-cinema card-ebuid">
                                            <img className ="icon-cover" src={iconEbv} alt=""/>
                                            <div className ="con-cover-cinema">
                                                <div className ="left-cinema-detail">
                                                    <img src={iconEbvDetail} alt=""/>
                                                    <p>Whatever street No.12, South Purwokerto</p>
                                                </div>
                                                <div className ="right-cinema-detail">
                                                    <img className ="icon-arrow" src={iconForward}/>
                                                </div>
                                            </div>
                                            <div className ="con-cinema-detail">
                                                <hr/>
                                                <p className ="title-category-time">REGULAR</p>
                                                <div className ="con-time">
                                                    <p>08:30 AM</p>
                                                    <p>10:30 AM</p>
                                                    <p>10:30 AM</p>
                                                    <p>10:30 AM</p>
                                                    <p>10:30 AM</p>
                                                    <p className ="active">10:30 AM</p>
                                                    <p>10:30 AM</p>
                                                </div>
                                                <p className ="title-category-time">GOLD</p>
                                                <div className ="con-time">
                                                    <p>08:30 AM</p>
                                                    <p>10:30 AM</p>
                                                    <p>10:30 AM</p>
                                                    <p className ="active">10:30 AM</p>
                                                    <p>10:30 AM</p>
                                                </div>
                                                <p className ="title-category-time">PELATINUM</p>
                                                <div className ="con-time">
                                                    <p>08:30 AM</p>
                                                    <p>10:30 AM</p>
                                                    <p>10:30 AM</p>
                                                    <p className ="active">10:30 AM</p>
                                                    <p>10:30 AM</p>
                                                </div>
                                            </div>
                                        </div>
                                    </label>
                                    <label className ="con-btn-cinema" htmlFor="hiflix">
                                        <input id="hiflix" type="checkbox" name="hiflix" value="hiflix" checked />
                                        <div className ="btn-cinema">
                                            <img className ="icon-cover" id="icon-hiflix-desktop" src={iconHiflixWhite} alt=""/>
                                            <img className ="icon-cover" id="icon-hiflix-mobile" src={iconHiflix2} alt=""/>
                                            <div className ="con-cover-cinema">
                                                <div className ="left-cinema-detail">
                                                    <img src={iconHiflixDetail} alt=""/>
                                                    <p>Whatever street No.12, South Purwokerto</p>
                                                </div>
                                                <div className ="right-cinema-detail">
                                                    <img className ="icon-arrow" src={iconForwardDown}/>
                                                </div>
                                            </div>
                                        </div>
                                    </label>
                                    <label className ="con-btn-cinema" htmlFor="cineOne21">
                                        <input id="cineOne21" type="checkbox" name="cineOne21" value="cineOne21"/>
                                        <div className ="btn-cinema">
                                            <img className ="icon-cover" src={iconCinema2} alt=""/>
                                            <div className ="con-cover-cinema">
                                                <div className ="left-cinema-detail">
                                                    <img src={iconCinemaDetail} alt=""/>
                                                    <p>Whatever street No.12, South Purwokerto</p>
                                                </div>
                                                <div className ="right-cinema-detail">
                                                    <img className ="icon-arrow" src={iconForwardDown}/>
                                                </div>
                                            </div>
                                        </div>
                                    </label>
                                    <label className ="con-btn-cinema ebuid2" htmlFor="ebuid2">
                                        <input id="ebuid2" type="checkbox" name="ebuid2" value="ebuid2"/>
                                        <div className ="btn-cinema">
                                            <img className ="icon-cover" src={iconEbv} alt=""/>
                                        </div>
                                    </label>
                                </div>
                                <div className ="con-pagination-cinema">
                                    <button type="button" className ="number number-1">1</button>
                                    <button type="button" className ="number">2</button>
                                    <button type="button" className ="number">3</button>
                                    <button type="button" className ="number">4</button>
                                </div>
                                <input className ="btn-submit btn-submit-cinema" type="button" value="Book Now"/>
                            </form>
                        </section>
                    </article>
                </main>
                <Footer/>
            </>
    )
}

export default MovieDetail