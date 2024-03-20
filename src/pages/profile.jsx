import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import iconSideProfile from '../assets/images/icons/Ellipse side.png'
import iconStar from '../assets/images/icons/eva_star-fill.png'
import iconCineOne from '../assets/images/icons/CineOne21 2.png'
import iconForward from '../assets/images/icons/Forward.png'
import iconForwardDown from '../assets/images/icons/Forward-down.png'
import iconEbv from '../assets/images/icons/ebv.id 2.png'



function Profile () {
    
    const  showProfilePage = (evt, tabName) => {
        let tabcontent; 
        let tablinks;
        let i;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].classList.add("hidden");
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("border-b-4", "");
            tablinks[i].className = tablinks[i].className.replace("text-[#14142B]", "text-[#AAAAAA]");
        }
        document.getElementById(tabName).classList.remove("hidden");
        evt.currentTarget.classList.add("border-b-4");
        evt.currentTarget.classList.add("text-[#14142B]");
        evt.currentTarget.classList.remove("text-[#AAAAAA]");
      }

    
    return (
        <>
        <Header pageProfile={true} />
            <main className="relative mt-24 bg-[#A0A3BD33] flex flex-row justify-around px-14 py-16">
                <section className="flex flex-col gap-y-0.5 md:w-1/4">
                    <div className="flex flex-col gap-y-4 bg-white rounded-t-xl p-10">
                        <div className="flex flex-row justify-between items-center">
                            <p className="text-[#4E4B66] text-base font-normal tracking-wider">INFO</p>
                            <button className="text-blue-700 text-xl font-bold tracking-wider" type="button">...</button>
                        </div>
                        <div className="w-fit rounded-full mx-auto my-auto">
                            <img src={iconSideProfile} alt=""/>
                        </div>
                        <div className="text-center">
                            <p className="text-[#14142B] text-xl font-semibold">Jonas El Rodriguez</p>
                            <span className="text-[#4E4B66] text-sm font-normal">Moviegoers</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-6 bg-white overflow-hidden rounded-b-xl p-10 px-8 pb-10 md:pb-20">
                        <p className="text-[#4E4B66] text-base font-semibold">Loyalty Points</p>
                        <div className="relative">
                            <div className="relative flex flex-col gap-y-7 h-32 w-60 rounded-2xl bg-blue-700 p-5 z-10">
                                <p className="text-white text-lg font-bold">Moviegoers</p>
                                <span className="text-white text-2xl font-semibold">320 <span className="text-xs font-normal">points</span></span>
                            </div>
                            <div className="absolute -bottom-1 left-2 h-32 w-56 rounded-2xl bg-[#1D4ED880] z-0"></div>
                            <span className="absolute w-32 h-32 bg-[#FFFFFF4D] rounded-full -right-12 md:-right-5 -top-12 z-20"></span>
                            <span className="absolute w-32 h-32 bg-[#FFFFFF4D] rounded-full -right-16 md:-right-8 -top-6 z-20"></span>
                            <img className="absolute top-2 -right-1 md:right-9 z-30" src={iconStar} alt=""/>
                        </div>
                        <div>
                            <p className="text-[#4E4B66] text-base font-normal tracking-wide mb-2">180 points become a master</p>
                            <div className="relative w-full bg-[#11111129] h-4 rounded-full shadow-inner overflow-hidden">
                                <span className="block w-1/2 bg-blue-700 rounded-full h-full"></span>
                            </div>
                        </div>
                        <button className="block md:hidden text-blue-700 font-bold text-base text-center py-3 mt-5 rounded-2xl border border-blue-700" type="button">Edit Profile</button>
                    </div>
                </section>
                <section className="fixed top-20 left-0 w-screen md:static md:w-2/3 flex flex-col gap-y-10">
                    <div className="w-full bg-white flex justify-between md:inline md:rounded-xl px-7 ">
                        <button className="tablinks hidden md:inline text-[#14142B]  py-5 text-lg font-normal border-b-4 border-blue-700 mr-8" type="button" onClick={(event)=>{showProfilePage(event, 'account-setting')}}>Account Settings</button>
                        <button className="tablinks md:hidden text-[#14142B]  py-5 text-lg font-normal border-b-4 border-blue-700 mr-8" type="button" onClick={(event)=>{showProfilePage(event, 'account-setting')}}>Details Account</button>
                        <button className="tablinks text-[#AAAAAA] text-lg font-normal py-5 border-blue-700" type="button" onClick={(event)=>{showProfilePage(event, 'order-history')}}>Order History</button>
                    </div>
                    <div  id='account-setting' className='tabcontent flex flex-col gap-y-10'>
                        <div className="hidden w-full md:flex flex-col bg-white rounded-xl px-7 py-12 pt-5 ">
                            <p className="text[#14142B] text-base font-normal py-4 border-b border-[#DEDEDE] mb-10">Details Information</p>
                            <div className="grid grid-cols-2 gap-x-7 gap-y-5">
                                <div className="flex flex-col gap-y-3">
                                    <label className="text-[#4E4B66] text-base font-normal" htmlFor="first-name">First Name</label>
                                    <input className="text-[#4E4B66] text-base font-normal rounded-xl border border-[#DEDEDE] px-4 py-4" type="text" name="first-name" id="first-name" value="Jonas"/>
                                </div>
                                <div className="flex flex-col gap-y-3">
                                    <label className="text-[#4E4B66] text-base font-normal" htmlFor="last-name">Last Name</label>
                                    <input className="text-[#4E4B66] text-base font-normal rounded-xl border border-[#DEDEDE] px-4 py-4" type="text" name="last-name" id="last-name" value="El Rodriguez"/>
                                </div>
                                <div className="flex flex-col gap-y-3">
                                    <label className="text-[#4E4B66] text-base font-normal" htmlFor="email">E-mail</label>
                                    <input className="text-[#4E4B66] text-base font-normal rounded-xl border border-[#DEDEDE] px-4 py-4" type="email" name="email" id="email" value="jonasrodrigu123@gmail.com"/>
                                </div>
                                <div className="flex flex-col gap-y-3">
                                    <label className="text-[#4E4B66] text-base font-normal" htmlFor="phone">Phone Number</label>
                                    <div className="rounded-xl border border-[#DEDEDE] px-4 py-4">
                                        <select className="pe-2 me-2"  name="code" id="code">
                                            <option value="+62">+62</option>
                                            <option value="+62">+60</option>
                                        </select>
                                        <input className="text-[#4E4B66] text-base font-normal border-l border-[#DEDEDE] ps-3 " type="tel" name="phone" id="phone" value="81445687121"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden w-full md:flex flex-col bg-white rounded-xl px-7 py-12 pt-5">
                            <p className="text[#14142B] text-base font-normal py-4 border-b border-[#DEDEDE] mb-10">Account and Privacy</p>
                            <div className="grid grid-cols-2 gap-x-7 gap-y-5">
                                <div className="flex flex-col gap-y-3">
                                    <label className="text-[#4E4B66] text-base font-normal" htmlFor="password">New Password</label>
                                    <input className="text-[#4E4B66] text-base font-normal rounded-xl border border-[#DEDEDE] px-4 py-4" type="password" name="password" id="password" placeholder="Write your password"/>
                                </div>
                                <div className="flex flex-col gap-y-3">
                                    <label className="text-[#4E4B66] text-base font-normal" htmlFor="new-password">New Password</label>
                                    <input className="text-[#4E4B66] text-base font-normal rounded-xl border border-[#DEDEDE] px-4 py-4" type="password" name="new-password" id="new-password" placeholder="Confirm your password"/>
                                </div>
                            </div>
                        </div>
                        <button className="hidden md:block w-5/12 text-[#F7F7FC] bg-blue-700 hover:bg-blue-900 text-base font-semibold rounded-xl px-4 py-4" type="button">Update changes</button>
                    </div>
                    <div id='order-history' className='tabcontent hidden flex flex-col gap-y-10'>
                        <div className="w-full flex flex-col bg-white rounded-xl py-8 overflow-hidden">
                            <div className="flex flex-col-reverse gap-y-3 md:flex-row justify-between px-8">
                                <div className="flex flex-col gap-y-2 mb-7">
                                    <p className="text-[#AAAAAA] text-sm font-normal">Tuesday, 07 July 2020 - 04:30pm</p>
                                    <p className="text-black text-lg md:text-2xl font-semibold">Spider-Man: Homecoming</p>
                                </div>
                                <div>
                                    <img className="w-40" src={iconCineOne} alt=""/>
                                </div>
                            </div>
                            <hr/>
                            <div className="flex flex-col items-center gap-y-6 md:flex-row md:justify-between px-8 pt-8">
                                <div className="w-full md:w-3/4 flex flex-col gap-y-3 md:flex-row gap-x-6 justify-start">
                                    <p className="text-[#00BA88] bg-[#00BA8833] text-sm font-bold text-center rounded-md px-10 py-2">Ticket in active</p>
                                    <p className="text-[#E82C2C] bg-[#E82C2C33] text-sm font-bold text-center rounded-md px-12 py-2">Not Paid</p>
                                </div>
                                <button className="flex flex-row gap-x-2 justify-center items-center text-lg font-normal text-[#AAAAAA] " type="button">Show Details 
                                    <img className="hidden md:inline md:ml-4" src={iconForwardDown} alt=""/>
                                    <img className="md:hidden md:ml-4" src={iconForward} alt=""/>
                                </button>
                                <div className="md:hidden flex flex-col gap-y-4">
                                    <p className="text-black text-lg font-semibold">Ticket Information</p>
                                    <div className="flex flex-col gap-y-3">
                                        <p className="text-[#8692A6] text-sm">No. Rekening Virtual :</p>
                                        <div className="flex flex-row justify-between items-center">
                                            <p className="text-[#14142B] text-lg font-bold">12321328913829724</p>
                                            <button className="text-sm text-blue-700 p-2 border border-blue-700 rounded" type="button">Copy</button>
                                        </div>
                                        <p className="text-[#8692A6] text-sm">Total Payment :</p>
                                        <span className="text-lg font-bold text-blue-700">$30</span>
                                        <p className="text-xs text-[Secondary] leading-7">Pay this payment bill before it is due, on <span className="text-[#D00707]">June 23, 2023.</span> If the bill has not been paid by the specified time, it will be forfeited</p>
                                    </div>
                                    <button className="text-sm text-white bg-blue-700 py-3 rounded" type="button">Cek Pembayaran</button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col bg-white rounded-xl py-8 overflow-hidden">
                            <div className="flex flex-col-reverse gap-y-3 md:flex-row justify-between px-8">
                                <div className="flex flex-col gap-y-2 mb-7">
                                    <p className="text-[#AAAAAA] text-sm font-normal">Tuesday, 07 July 2020 - 04:30pm</p>
                                    <p className="text-black text-lg md:text-2xl font-semibold">Spider-Man: Homecoming</p>
                                </div>
                                <div>
                                    <img className="w-40" src={iconEbv} alt=""/>
                                </div>
                            </div>
                            <hr/>
                            <div className="flex flex-col items-center gap-y-6 md:flex-row md:justify-between px-8 pt-8">
                                <div className="w-full md:w-3/4 flex flex-col gap-y-3 md:flex-row gap-x-6 justify-start">
                                    <p className="text-[#6E7191] bg-[#6E719133] text-sm font-bold text-center rounded-md px-10 py-2">Ticket in active</p>
                                    <p className="text-[#1D4ED8] bg-[#1D4ED833] text-sm font-bold text-center rounded-md px-12 py-2">Not Paid</p>
                                </div>
                                <button className="flex flex-row gap-x-2 justify-center items-center text-lg font-normal text-[#AAAAAA] " type="button">Show Details <img className="md:ml-4" src={iconForwardDown} alt=""/></button>
                            </div>
                        </div>
                        <div className="hidden w-full md:flex flex-col bg-white rounded-xl py-8 overflow-hidden">
                            <div className="flex flex-col-reverse gap-y-3 md:flex-row justify-between px-8">
                                <div className="flex flex-col gap-y-2 mb-7">
                                    <p className="text-[#AAAAAA] text-sm font-normal">Tuesday, 07 July 2020 - 04:30pm</p>
                                    <p className="text-black text-lg md:text-2xl font-semibold">Spider-Man: Homecoming</p>
                                </div>
                                <div>
                                    <img className="w-40" src={iconEbv} alt=""/>
                                </div>
                            </div>
                            <hr/>
                            <div className="flex flex-col items-center gap-y-6 md:flex-row md:justify-between px-8 pt-8">
                                <div className="w-full md:w-3/4 flex flex-col gap-y-3 md:flex-row gap-x-6 justify-start">
                                    <p className="text-[#6E7191] bg-[#6E719133] text-sm font-bold text-center rounded-md px-10 py-2">Ticket in active</p>
                                    <p className="text-[#1D4ED8] bg-[#1D4ED833] text-sm font-bold text-center rounded-md px-12 py-2">Not Paid</p>
                                </div>
                                <button className="flex flex-row gap-x-2 justify-center items-center text-lg font-normal text-[#AAAAAA] " type="button">Show Details <img className="md:ml-4" src={iconForwardDown} alt=""/></button>
                            </div>
                        </div>
                    </div>  
                </section>
            </main>
        </>
    )
}

export default Profile;