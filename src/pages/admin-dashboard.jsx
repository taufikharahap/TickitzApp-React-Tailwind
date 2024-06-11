import React, {useState, useEffect} from 'react';
import useApi from '../utils/useApi'
import Header from '../components/Header';
import imageGrafik from '../assets/images/Graph lines.png'
import '../custom-css/form-movie.css'

function AdminDashboard () {
    const api = useApi();
    const [movies, setMovies] = useState(null);

    useEffect(() => {
            api({ method: 'GET', url: '/movie?page=1&limit=5' })
            .then(({ data }) => {
                setMovies(data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <Header pageAdmin={true}/>
            <main className='font-Mulish min-h-screen bg-[#EFF0F6] md:py-20 py-28 pb-10 overflow-x-hidden'>
                <section id='dashboard' className='tabcontent flex flex-col gap-y-10'>
                    <section className='w-[80%] flex flex-col gap-y-10 bg-white mx-auto rounded-[10px] md:p-16 p-7 overflow-x-hidden'>
                        <h3 className='text-[#14142B] text-nowrap text-lg md:text-2xl font-bold'>Sales Chart</h3>
                        <div className=''>
                            <form className='flex md:flex-row flex-col gap-x-5 gap-y-3' action="">
                                <select className='bg-[#EFF0F6] rounded-[8px] text-[#4E4B66] text-base font-semibold px-3 py-4 md:w-[20%] outline-none cursor-pointer' name="movie-name" id="">
                                    <option value="">Movies Name</option>
                                    {movies && movies.map((movie) => {
                                        return <option value={movie.movie_name} key={movie.movie_id}>{movie.movie_name}</option>
                                    })}
                                </select>
                                <input className='bg-[#EFF0F6] rounded-[8px] text-[#4E4B66] text-base font-semibold px-3 py-3 outline-none cursor-pointer' type="week" name="week-sales" id=""/>
                                <button className='bg-blue-700 text-white rounded-[8px] text-base font-semibold px-10 py-3 outline-none cursor-pointer' type="submit">Filter</button>
                            </form>
                        </div>
                        <p className='text-[#151522] text-sm font-semibold'>Avengers: End Game</p>
                        <div className='relative md:w-[85%] overflow-x-scroll md:overflow-x-hidden'>
                            <div className='flex flex-col-reverse gap-y-14'>
                                <div className='flex flex-row'><span className='w-[5%] text-[#999999] text-xs font-normal'>$0</span><span className='w-[95%] border-b border-[#E4E4E433]'></span></div>
                                <div className='flex flex-row'><span className='w-[5%] text-[#999999] text-xs font-normal'>$200</span><span className='w-[95%] border-b border-[#E4E4E433]'></span></div>
                                <div className='flex flex-row'><span className='w-[5%] text-[#999999] text-xs font-normal'>$400</span><span className='w-[95%] border-b border-[#E4E4E433]'></span></div>
                                <div className='flex flex-row'><span className='w-[5%] text-[#999999] text-xs font-normal'>$600</span><span className='w-[95%] border-b border-[#E4E4E433]'></span></div>
                                <div className='flex flex-row'><span className='w-[5%] text-[#999999] text-xs font-normal'>$800</span><span className='w-[95%] border-b border-[#E4E4E433]'></span></div>
                            </div>
                            <div className='flex flex-row justify-between  ps-14 mt-10'>
                                <span className='text-[#999999] text-xs font-normal'>Jan</span>
                                <span className='text-[#999999] text-xs font-normal'>Feb</span>
                                <span className='text-[#999999] text-xs font-normal'>Mar</span>
                                <span className='text-[#999999] text-xs font-normal'>Apr</span>
                                <span className='text-[#999999] text-xs font-normal'>May</span>
                                <span className='text-[#999999] text-xs font-normal'>Jun</span>
                            </div>
                            <div className='absolute bottom-6 left-10 w-[866.56px] h-[269.25px]'>
                                <img src={imageGrafik} alt="" />
                            </div>
                        </div>
                    </section>
                    <section className='w-[80%] flex flex-col gap-y-10 bg-white mx-auto rounded-[10px] md:p-16 p-7 overflow-x-hidden'>
                        <h3 className='text-[#14142B] text-nowrap text-lg md:text-2xl font-bold'>Ticket Sales</h3>
                        <div className=''>
                            <form className='flex md:flex-row flex-col gap-x-5 gap-y-3' action="">
                                <select className='bg-[#EFF0F6] rounded-[8px] text-[#4E4B66] text-base font-semibold px-3 py-3 md:w-[20%] outline-none cursor-pointer' name="movie-name" id="">
                                    <option disabled value="">Category</option>
                                    <option value="">Adventure</option>
                                    <option value="">Action</option>
                                    <option value="">Fantasy</option>
                                    <option value="">Comedy</option>
                                </select>
                                <select className='bg-[#EFF0F6] rounded-[8px] text-[#4E4B66] text-base font-semibold px-3 py-3 md:w-[20%] outline-none cursor-pointer' name="movie-category" id="">
                                    <option disabled value="">Location</option>
                                    <option value="">Purwokerto</option>
                                </select>
                                <button className='bg-blue-700 text-white rounded-[8px] text-base font-semibold px-10 py-3 outline-none cursor-pointer' type="submit">Filter</button>
                            </form>
                        </div>
                        <p className='text-[#151522] text-sm font-semibold'>Adventure, Purwokerto</p>
                        <div className='relative md:w-[85%] flex flex-col overflow-x-scroll md:overflow-x-hidden'>
                            <div className='flex flex-col-reverse gap-y-14'>
                                <div className='flex flex-row'><span className='w-[5%] text-[#999999] text-xs font-normal'>$0</span><span className='w-[95%] border-b border-[#E4E4E433]'></span></div>
                                <div className='flex flex-row'><span className='w-[5%] text-[#999999] text-xs font-normal'>$200</span><span className='w-[95%] border-b border-[#E4E4E433]'></span></div>
                                <div className='flex flex-row'><span className='w-[5%] text-[#999999] text-xs font-normal'>$400</span><span className='w-[95%] border-b border-[#E4E4E433]'></span></div>
                                <div className='flex flex-row'><span className='w-[5%] text-[#999999] text-xs font-normal'>$600</span><span className='w-[95%] border-b border-[#E4E4E433]'></span></div>
                                <div className='flex flex-row'><span className='w-[5%] text-[#999999] text-xs font-normal'>$800</span><span className='w-[95%] border-b border-[#E4E4E433]'></span></div>
                            </div>
                            <div className='flex flex-row justify-between  ps-14 mt-10'>
                                <span className='text-[#999999] text-xs font-normal'>Jan</span>
                                <span className='text-[#999999] text-xs font-normal'>Feb</span>
                                <span className='text-[#999999] text-xs font-normal'>Mar</span>
                                <span className='text-[#999999] text-xs font-normal'>Apr</span>
                                <span className='text-[#999999] text-xs font-normal'>May</span>
                                <span className='text-[#999999] text-xs font-normal'>Jun</span>
                            </div>
                            <div className='absolute bottom-6 left-10 w-[866.56px] h-[269.25px]'>
                                <img src={imageGrafik} alt="" />
                            </div>
                        </div>
                    </section>
                </section>
            </main>
        </>
    )
}

export default AdminDashboard;