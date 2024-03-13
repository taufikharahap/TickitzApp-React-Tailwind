import React from "react";
import ReactDOM from "react-dom/client";
import iconMenu from '../assets/images/icons/gg_menu-right-alt.svg'
import iconTickitz from '../assets/images/icons/Tickitz-1.png'

export default function Header () {
    const openSideNav = () => {
        const sideMenu = document.querySelector(".side-menu");
        
        sideMenu.classList.toggle("open");
        
        document.addEventListener("click", function(e){
            
            if (e.target.id == "side-menu") {
                sideMenu.classList.remove("open");
            }
        })
    }
    return (
        <header className="app-bar">
            <div className="icon-tickitz-home">
                <img src={iconTickitz} alt="icon tickitz app"/>
            </div>
            <nav className="side-menu" id="side-menu">
                <ul className="nav-list">
                    <li><a href="/">Home</a></li>
                    <li><a href="/movies">Movie</a></li>
                    <li><a href="">Buy Ticket</a></li>
                    <ul id="con-btn-sign-side">
                        <li id="btn-sign-in"><a href="/sign-in">SignIn</a></li>
                        <li id="btn-sign-up"><a href="/sign-up">Sign Up</a></li>
                    </ul>
                </ul>
            </nav>
            <div className="con-btn-sign">
                <a className="btn-sign-in" href="/sign-in">SignIn</a>
                <a className="btn-sign-up" href="/sign-up">Sign Up</a>
            </div>
            <button id="btn-menu" type="button" onClick={openSideNav}>
                <img src={iconMenu} alt=""/>
            </button>
        </header>
    )
}