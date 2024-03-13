import React from "react";
import iconTickitz from '../assets/images/icons/Tickitz-1.png'
import iconCineOne from '../assets/images/icons/CineOne21 2.png'
import iconEbv from '../assets/images/icons/ebv.id 2.png'
import iconHiflix from '../assets/images/icons/hiflix 2.png'
import iconFb from '../assets/images/icons/eva_facebook-outline.svg'
import iconIg from '../assets/images/icons/bx_bxl-instagram.svg'
import iconTwitter from '../assets/images/icons/eva_twitter-outline.svg'
import iconYt from '../assets/images/icons/feather_youtube.svg'

function Footer (){
    return (
        <footer>
            <div className="con-list-footer">
                <div className="sub-list-footer footer-tickitz">
                    <img src={iconTickitz} alt="icon-tickitz"/>
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
    )
}

export default Footer;