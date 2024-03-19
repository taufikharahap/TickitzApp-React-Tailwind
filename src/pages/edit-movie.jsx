import React, {useState, useEffect} from 'react';
import useApi from '../utils/useApi'
import Header from '../components/Header';

function EditMovie () {
    return (
        <>
            <Header pageAdmin={true}/>
            <main className='font-Mulish min-h-screen mt-16 md:mt-24 bg-[#EFF0F6] py-20 overflow-x-hidden'>
                <section id='movie-form' className=' md:w-[50%] bg-white rounded-[6px] p-10 mx-auto'>
                        <h3 className='font-bold text-[#14142B] text-[24px]'>Edit Movie</h3>
                        <form action="" className='flex flex-col gap-y-5 mt-5'>
                            <div className='flex flex-col gap-y-3'>
                                <label className='font-normal text-[#696F79] text-base' htmlFor="file">Upload Image</label>
                                <input className='btn-upload' type="file" id="file" name="file" accept=".png, .jpg, .jpeg" />
                            </div>
                            <div className='flex flex-col gap-y-3'>
                                <label className='font-normal text-[#696F79] text-base' htmlFor="name">Movie Name</label>
                                <input className=' border border-[#DEDEDE] rounded-[4px] bg-[#FCFDFE] py-4 px-3' type="text" id='name' />
                            </div>
                            <div className='flex flex-col gap-y-3'>
                                <label className='font-normal text-[#696F79] text-base' htmlFor="category">Category</label>
                                <input className=' border border-[#DEDEDE] rounded-[4px] bg-[#FCFDFE] py-4 px-3' type="text" name="category" id="category" />
                            </div>
                            <div className='w-full flex flex-row justify-between'>
                                <div className='w-[40%] flex flex-col gap-y-3'> 
                                    <label className='font-normal text-[#696F79] text-base' htmlFor="release">Release date</label>
                                    <input className=' border border-[#DEDEDE] rounded-[4px] bg-[#FCFDFE] py-4 px-3' type="date" name="release" id="release" />
                                </div>
                                <div className=' w-[40%] flex flex-col gap-y-3'>
                                    <label className='font-normal text-[#696F79] text-base' htmlFor="">Duration (hour / minutue)</label>
                                    <div className='flex flex-row justify-between'>
                                        <input className=' w-[40%] border border-[#DEDEDE] rounded-[4px] bg-[#FCFDFE] py-4 px-3' type="number" name="hour" id="" />
                                        <input className=' w-[40%] border border-[#DEDEDE] rounded-[4px] bg-[#FCFDFE] py-4 px-3' type="number" name="minute" id="" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-3'>
                                <label className='font-normal text-[#696F79] text-base' htmlFor="director">Director name</label>
                                <input className=' border border-[#DEDEDE] rounded-[4px] bg-[#FCFDFE] py-4 px-3' type="text" name="director" id="director" />
                            </div>
                            <div className='flex flex-col gap-y-3'>
                                <label className='font-normal text-[#696F79] text-base' htmlFor="cast">Cast</label>
                                <input className=' border border-[#DEDEDE] rounded-[4px] bg-[#FCFDFE] py-4 px-3' type="text" name="cast" id="" />
                            </div>
                            <div className='flex flex-col gap-y-3'>
                                <label className='font-normal text-[#696F79] text-base' htmlFor="synopis">Synopsis</label>
                                <textarea className=' border border-[#DEDEDE] rounded-[4px] bg-[#FCFDFE] py-4 px-3' name="synopsis" id="synopsis" cols="30" rows="10"></textarea>
                            </div>
                            <div className='flex flex-col gap-y-3'>
                                <label className='font-normal text-[#696F79] text-base' htmlFor="location">Add location</label>
                                <input className=' border border-[#DEDEDE] rounded-[4px] bg-[#FCFDFE] py-4 px-3' type="text" name="location" id="" />
                            </div>
                            <div className='flex flex-col gap-y-3'>
                                <label className='font-normal text-[#696F79] text-base' htmlFor="show-date">Set Date & Time</label>
                                <input className='w-[30%] text-[#4E4B66] text-base font-semibold bg-[#EFF0F6] p-3' type="date" name="show-date" id="" />
                                <div className='flex flex-row gap-x-7 border-b-2 border-[#DEDEDE] pb-3 mt-3'>
                                    <input className='border border-[#5F2EEA] rounded-[3px] p-2 cursor-pointer ' type="time" name="time" id="" />
                                    <span className='text-[14px] font-semibold text-[#4E4B66] p-2'>08:30am</span>
                                    <span className='text-[14px] font-semibold text-[#4E4B66] p-2'>10:30am</span>
                                </div>
                            </div>
                            <button className='text-white text base font-bold bg-blue-700 py-4 px-3 shadow-lg hover:bg-blue-900 rounded-[4px] mt-5' type="submit">Save Movie</button>
                        </form>
                </section>  
            </main>
        </>
        
    )
}

export default EditMovie;