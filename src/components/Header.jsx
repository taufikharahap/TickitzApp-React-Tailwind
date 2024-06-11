import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/reducer/user'
import iconMenu from '../assets/images/icons/gg_menu-right-alt.svg'
import iconTickitz from '../assets/images/icons/Tickitz-1.png'
import useApi from '../utils/useApi';
import iconNoPhotoProfile from '../assets/images/icons/no-photo-profile.png'
import { useLocation } from 'react-router-dom';
import '../custom-css/side-nav.css'

const HeaderLinks = [
    {
      title: 'Home',
      route: '/',
    },
    {
      title: 'Movie',
      route: '/movies',
    },
    {
      title: 'Buy Ticket',
      route: '/buy-ticket',
    }
  ];
  
  const HeaderLink = ({ title, route }) => {
    const location = useLocation();
    const isActiveRoute = location.pathname == route;

    return (
      <li><a className={`${isActiveRoute ? "font-bold" : ""} ${route == '/profile' ? 'md:hidden' : ''}`} href={route}>{title}</a></li>
    );
  };


export default function Header ({pageHomeOrMovies = false, pageProfile = false, pageAdmin = false}) {
    const {isAuthUser, isAuthAdmin, user_id} = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const api = useApi()
    const location = useLocation();


    const [photo, setPhoto] = useState('')

    const getPhotoProfile = ()=> {
        api({ method: 'GET', url: `/users/photo/${user_id}` })
            .then(({ data }) => {
                setPhoto(data.data[0].photo_url)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        if (isAuthUser || isAuthAdmin) {
            getPhotoProfile()
        }
    },[])

    const openSideNav = () => {
        const sideMenu = document.querySelector(".side-menu");
        
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
                        {
                            isAuthAdmin || isAuthUser ? 
                                <div className="md:hidden w-1/3 mx-auto flex justify-center py-5 mb-2 rounded-lg">
                                    <img className="w-14 h-14 rounded-full border" src={photo ? photo : iconNoPhotoProfile} alt="profile image"/>
                                </div>
                                : ""
                        }
                        {
                            HeaderLinks.map((link, i) => (
                                <HeaderLink {...link} key={i}/>
                            ))
                        }
                        {isAuthUser || isAuthAdmin ? 
                            <li className='md:hidden'><a className={location.pathname == '/profile' ? 'font-bold' : 'font-normal'} href="/profile">Profile</a></li>
                            : ""
                        }
                        <ul id="con-btn-sign-side">
                            {isAuthUser || isAuthAdmin ? 
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
                {isAuthUser || isAuthAdmin ? 
                    (
                        <div className='hidden md:flex justify-end w-1/4'>
                            <div className='relative group cursor-pointer'>
                                <img className="w-14 h-14 rounded-full border" src={photo ? photo : iconNoPhotoProfile} alt="profile image"/>
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
                        </div>
                    )  
                    : 
                    ( <div className="con-btn-sign w-[25%]">
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
            <header className="app-bar">
                <a className="icon-tickitz-home" href="/">
                    <img className="" src={iconTickitz} alt='icon-tickitz-home'/>
                </a>
                <nav className="side-menu" id="side-menu">
                    <ul className="nav-list">
                        {
                            isAuthAdmin || isAuthUser ? 
                                <div className="md:hidden w-1/3 mx-auto flex justify-center py-5 mb-2 rounded-lg">
                                    <img className="w-14 h-14 rounded-full border" src={photo ? photo : iconNoPhotoProfile} alt="profile image"/>
                                </div>
                                : ""
                        }
                        {
                            HeaderLinks.map((link, i) => (
                                <HeaderLink {...link} key={i}/>
                            ))
                        }
                        {isAuthUser || isAuthAdmin ? 
                            <li className='md:hidden'><a className={`${location.pathname == '/profile' ? 'font-bold' : 'font-normal'}`} href="/profile">Profile</a></li>
                            : ""
                        }
                        <ul id="con-btn-sign-side">
                            {isAuthUser || isAuthAdmin ? 
                                (
                                <>
                                    <li id="btn-sign-in"><a href="" 
                                        onClick={(e) => {
                                                e.preventDefault()
                                                dispatch(logout())
                                            }
                                        }>Sign Out</a></li>
                                </>
                                ): ""
                            }
                        </ul>
                    </ul>
                </nav>
                <div className="hidden md:flex justify-end  items-center gap-x-4 md:w-[25%]">
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
                        <img className="w-14 h-14 rounded-full border" src={photo ? photo : iconNoPhotoProfile} alt="profile image"/>
                        <span className='hidden group-hover:flex hover:flex md:absolute top-[56px] left-0 flex flex-col md:h-fit md:shadow-xl hover:shadow-2xl bg-white py-5 pb-2 mt-0 rounded-[4px] z-30'>
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
                
                <button className="flex md:hidden" id="btn-menu" type="button" onClick={openSideNav}>
                    <img src={iconMenu} alt=""/>
                </button>
            </header>
        )
    }else if(pageAdmin) {
        return (
            <header className="app-bar">
                <a className="icon-tickitz-home" href="/">
                    <img className="" src={iconTickitz} alt="icon tickitz app"/>
                </a>
                <nav className="side-menu" id="side-menu">
                    <ul className="nav-list">
                    {
                        isAuthAdmin? 
                            <div className="md:hidden w-1/3 mx-auto flex justify-center py-5 mb-2 rounded-lg">
                                <img className="w-14 h-14 rounded-full border" src={photo ? photo : iconNoPhotoProfile} alt="profile image"/>
                            </div>
                            : ""
                    }
                        <li><a className="" href="/admin/dashboard">Dashboard</a></li>
                        <li><a className=""  href="/admin/movie">Movie</a></li>
                        <ul id="con-btn-sign-side">
                            {isAuthAdmin ? 
                                (
                                <>
                                    <li id="btn-sign-in"><a href="" 
                                        onClick={(e) => {
                                                e.preventDefault()
                                                dispatch(logout())
                                            }
                                        }>Sign Out</a></li>
                                </>
                                ): ""
                            }
                        </ul>
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
                        <img className="w-14 h-14 rounded-full border" src={photo ? photo : iconNoPhotoProfile} alt="profile image"/>
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
                <button className="flex md:hidden" id="btn-menu" type="button" onClick={openSideNav}>
                    <img src={iconMenu} alt=""/>
                </button>
            </header>
        )
    }
    
}