import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { logout } from '../store/reducer/user'
import iconMenu from '../assets/images/icons/gg_menu-right-alt.svg'
import iconTickitz from '../assets/images/icons/Tickitz-1.png'
import iconProfile from '../assets/images/icons/Ellipse 11.png'

export default function Header ({pageHomeOrMovies = false, pageProfile = false, pageAdmin = false}) {
    const {isAuthUser, isAuthAdmin} = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const params = useParams();

    const openSideNav = () => {
        const sideMenu = document.querySelector(".side-menu");
        console.log(params);
        
        sideMenu.classList.toggle("open");
        
        document.addEventListener("click", function(e){
            
            if (e.target.id == "side-menu") {
                sideMenu.classList.remove("open");
            }
        })
    }

    if (pageHomeOrMovies) {
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
                        <li className='md:hidden'><a href="/profile">Profile</a></li>
                        <ul id="con-btn-sign-side">
                            {isAuthUser ? 
                                (
                                <>
                                    <li id="btn-sign-in"><a href="" 
                                        onClick={(e) => {
                                                e.preventDefault()
                                                dispatch(logout())
                                            }
                                        }>Sign Out</a></li>
                                </>
                                ):
                                (
                                    <>
                                        <li id="btn-sign-in"><a href="/sign-in">Sign In</a></li>
                                        <li id="btn-sign-up"><a href="/sign-up">Sign Up</a></li>
                                    </>
                                )
                            }
                        </ul>
                    </ul>
                </nav>
                {isAuthUser ? 
                    (
                        <div className='hidden relative group cursor-pointer md:flex justify-end'>
                            <img src={iconProfile} alt=""/>
                            <span className='hidden group-hover:flex hover:flex md:absolute top-[56px] left-0 flex flex-col md:h-fit md:shadow-xl hover:shadow-2xl bg-white py-5 pb-2 mt-0 rounded-[4px] z-30'>
                                <a className='font-light px-5 py-2 hover:bg-neutral-100' href="/profile">Profile</a>
                                <a className='text-nowrap font-light px-5 py-2 hover:bg-neutral-100' 
                                    href="" 
                                    onClick={(e) => {
                                            e.preventDefault()
                                            dispatch(logout())
                                        }
                                    }>Sign out
                                </a>
                            </span>
                        </div>
                    )  
                    : 
                    ( <div className="con-btn-sign">
                        <a className="btn-sign-in" href="/sign-in">SignIn</a>
                        <a className="btn-sign-up" href="/sign-up">Sign Up</a>
                    </div>) 
                }
                <button id="btn-menu" type="button" onClick={openSideNav}>
                    <img src={iconMenu} alt=""/>
                </button>
            </header>
        )
    }else if(pageProfile) {
        return (
            <header className="fixed top-0 left-0 w-screen flex h-24 md:h-fit flex-row justify-between items-center px-8 md:px-24 py-6 bg-white md:border-b border-[#BABABA14] z-40">
            <a className="flex justify-start" href="/">
                <img className="" src={iconTickitz} alt=''/>
            </a>
            <nav className="absolute top-24 left-0 z-50 md:static bg-neutral-950/30 #00000099 w-0 transition-all ease-in-out overflow-hidden md:w-1/3 h-screen md:h-auto bg-current side-menu" id="side-menu">
                <ul className="bg-white flex flex-col md:flex-row gap-y-7 justify-start md:justify-around w-2/3 md:w-full h-screen md:h-auto text-sm px-8 pt-8 md:pt-0 md:px-0 nav-list">
                    <li><a className="font-normal text-sm text-[#0F172A]" href="/">Home</a></li>
                    <li><a className="font-normal text-sm text-[#0F172A]" href="/movies">Movie</a></li>
                    <li><a className="font-normal text-sm text-[#0F172A]" href="">Buy Ticket</a></li>
                    <li className='md:hidden'><a href="/profile">Profile</a></li>
                </ul>
            </nav>
            <div className="hidden md:flex justify-end  items-center gap-x-4 w-1/4">
                <div className="flex flex-row">
                <select className="text-[#414141] text-base font-semibold cursor-pointer" name="local" id="local">
                    <option value="1">Location</option>
                    <option value="2">Bandung</option>
                    <option value="3">Surabaya</option>
                </select>
                </div>
                <button type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                      </svg>
                </button>
                <div className='relative group cursor-pointer'>
                    <img src={iconProfile} alt=""/>
                    <span className='hidden group-hover:flex hover:flex md:absolute flex flex-col md:h-[60px] md:shadow-xl hover:shadow-2xl bg-white py-5 mt-0 rounded-[4px]'>
                        <a className='text-nowrap font-light px-5 py-2 hover:bg-slate-100' 
                            href="" 
                            onClick={(e) => {
                                    e.preventDefault()
                                    dispatch(logout())
                                }
                            }>Sign out</a>
                    </span>
                </div>
            </div>
            <button className="flex md:hidden" id="btn-menu" type="button">
                    <img src={iconMenu} alt=""/>
                </button>
        </header>
        )
    }else if(pageAdmin) {
        return (
            <header className="fixed top-0 left-0 w-screen flex h-24 md:h-fit flex-row justify-between items-center px-8 md:px-24 py-6 bg-white md:border-b border-[#DEDEDE] z-40">
                <a className="flex justify-start" href="/">
                    <img className="" src={iconTickitz} alt="icon tickitz app"/>
                </a>
                <nav className="absolute top-24 left-0 z-50 md:static bg-neutral-950/30 #00000099 w-0 transition-all ease-in-out overflow-hidden md:w-1/3 h-screen md:h-auto bg-current side-menu" id="side-menu">
                    <ul className="bg-white flex flex-col md:flex-row gap-y-7 justify-start md:justify-center md:gap-x-16 w-2/3 md:w-full h-screen md:h-auto text-sm px-8 pt-8 md:pt-0 md:px-0 nav-list">
                        <li><a className="tablinks  text-sm" href="/admin/dashboard">Dashboard</a></li>
                        <li><a className="tablinks text-sm"  href="/admin/movie">Movie</a></li>
                    </ul>
                </nav>
                <div className="hidden md:flex justify-end  items-center gap-x-4 w-1/4">
                    <div className="flex flex-row">
                    <select className="text-[#414141] text-base font-semibold cursor-pointer" name="local" id="local">
                        <option value="1">Location</option>
                        <option value="2">Bandung</option>
                        <option value="3">Surabaya</option>
                    </select>
                    </div>
                    <button type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </button>
                    <div className='relative group cursor-pointer'>
                        <img src={iconProfile} alt=""/>
                        <span className='hidden group-hover:flex hover:flex md:absolute flex flex-col md:h-[60px] md:shadow-xl hover:shadow-2xl bg-white py-5 mt-0 rounded-[4px]'>
                            <a className='text-nowrap font-light px-5 py-2 hover:bg-slate-100' 
                                href="" 
                                onClick={(e) => {
                                        e.preventDefault()
                                        dispatch(logout())
                                    }
                                }>Sign out</a>
                        </span>
                    </div>
                </div>
                <button className="flex md:hidden" id="btn-menu" type="button">
                    <img src={iconMenu} alt=""/>
                </button>
            </header>
        )
    }
    
}