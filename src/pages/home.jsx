import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import imageHero35 from '../assets/images/icons/Rectangle 35.png'
import imageHero37 from '../assets/images/icons/Rectangle 37.png'
import imageHero36 from '../assets/images/icons/Rectangle 36.png'
import imageHero38 from '../assets/images/icons/Rectangle 38.png'
import iconCheckShild from '../assets/images/icons/Shield-check.svg'
import iconchecCircle from '../assets/images/icons/icon-chec-circle.svg'
import iconSpeech from '../assets/images/icons/icons8-speech-bubble 1.svg'
import imageRectangle140 from '../assets/images/Rectangle 140.png'
import iconTickitz from '../assets/images/icons/Tickitz-1.png'
import iconCineOne from '../assets/images/icons/CineOne21 2.png'
import iconEbv from '../assets/images/icons/ebv.id 2.png'
import iconHiflix from '../assets/images/icons/hiflix 2.png'
import iconFb from '../assets/images/icons/eva_facebook-outline.svg'
import iconIg from '../assets/images/icons/bx_bxl-instagram.svg'
import iconTwitter from '../assets/images/icons/eva_twitter-outline.svg'
import iconYt from '../assets/images/icons/feather_youtube.svg'


export default function Home () {
    return (
        <main>
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
            <div className="con-card-movies">
                <div className="card-movies">
                    <img src={imageRectangle140} alt=""/>
                    <p className="movie-name">Black Widow</p>
                    <div className="con-movie-genre">
                        <p className="movie-genre">Action</p>
                        <p className="movie-genre">Adventure</p>
                    </div>
                    <div className="con-details-buy">
                        <a href="./pages/detail-movie.html">Details</a>
                        <a className="btn-buy">Buy Ticket</a>
                    </div>
                    <div className="dark-image"></div>
                </div>
                <div className="card-movies">
                    <img src={imageRectangle140} alt=""/>
                    <p className="movie-name">The Witches</p>
                    <div className="con-movie-genre">
                        <p className="movie-genre">Comedy</p>
                        <p className="movie-genre">Adventure</p>
                    </div>
                    <p className="recomended">Recomended</p>
                </div>
                <div className="card-movies">
                    <img src={imageRectangle140}/>
                    <p className="movie-name">Tenet</p>
                    <div className="con-movie-genre">
                        <p className="movie-genre">Action</p>
                        <p className="movie-genre">Sci-Fi</p>
                    </div>
                    <p className="recomended">Recomended</p>
                </div>
                <div className="card-movies">
                    <img src={imageRectangle140}/>
                    <p className="movie-name">Spiderman</p>
                    <div className="con-movie-genre">
                        <p className="movie-genre">Action</p>
                        <p className="movie-genre">Adventure</p>
                    </div>
                </div>
            </div>
            <p className="link-view-all">View All <span>&#8594;</span></p>
        </article>
        <article className="con-movies-upcoming">
            <h2 className="title">UPCOMING MOVIES</h2>
            <p className="sub-title sub-title-movie">Exciting Movie Coming Soon</p>
            <div className="btn-movies-upcoming">
                <button className="btn-left">&#8592;</button>
                <button className="btn-right">&#8594;</button>
            </div>
            <div className="con-card-movies">
                <div className="card-movies">
                    <img src={imageRectangle140}/>
                    <p className="movie-name">Black Widow</p>
                    <div className="con-movie-genre">
                        <p className="movie-genre">Action</p>
                        <p className="movie-genre">Adventure</p>
                    </div>
                </div>
                <div className="card-movies">
                    <img src={imageRectangle140}/>
                    <p className="movie-name">The Witches</p>
                    <div className="con-movie-genre">
                        <p className="movie-genre">Comedy</p>
                        <p className="movie-genre">Adventure</p>
                    </div>
                </div>
                <div className="card-movies">
                    <img src={imageRectangle140}/>
                    <p className="movie-name">Tenet</p>
                    <div className="con-movie-genre">
                        <p className="movie-genre">Action</p>
                        <p className="movie-genre">Sci-Fi</p>
                    </div>
                </div>
                <div className="card-movies">
                    <img src={imageRectangle140}/>
                    <p className="movie-name">Spiderman</p>
                    <div className="con-movie-genre">
                        <p className="movie-genre">Action</p>
                        <p className="movie-genre">Adventure</p>
                    </div>
                </div>
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
        <footer>
            <div className="con-list-footer">
                <div className="sub-list-footer footer-tickitz">
                    <img src={iconTickitz} alt="icon tickitz"/>
                    <p>Stop waiting in line. Buy tickets
                        conveniently, watch movies quietly.</p>
                </div>
                <div className="sub-list-footer footer-explore">
                    <p className="title-list-footer">Explore</p>
                    <div className="list-explore">
                        <p>Cinemas</p>
                        <p>Movie List</p>
                        <p>Notification</p>
                        <p>My Ticket</p>
                    </div>
                </div>
                <div className="sub-list-footer footer-sponsor">
                    <p className="title-list-footer">Our Sponsor</p>
                    <div className="list-sponsor">
                        <img src={iconEbv} alt=""/>
                        <img className="icon-cinema" src={iconCineOne} alt=""/>
                        <img className="icon-hiflix" src={iconHiflix} alt=""/>
                    </div>
                </div>
                <div className="sub-list-footer footer-follow">
                    <p className="title-list-footer">Follow us</p>
                    <div className="con-icon-medsos">
                        <div className="con-medsos">
                            <img src={iconFb} alt=""/>
                            <a href="">Tickitz Cinema id</a>
                        </div>
                        <div className="con-medsos">
                            <img src={iconIg} alt=""/>
                            <a href="">tickitz.id</a>
                        </div>
                        <div className="con-medsos">
                            <img src={iconTwitter} alt=""/>
                            <a href="">tickitz.id</a>
                        </div>
                        <div className="con-medsos">
                            <img src={iconYt} alt=""/>
                            <a href="">Tickitz Cinema id</a>
                        </div>
                    </div>
                </div>
            </div>
            <p className="copy-right">© 2020 Tickitz. All Rights Reserved.</p>
        </footer>
    </main>
    )
}