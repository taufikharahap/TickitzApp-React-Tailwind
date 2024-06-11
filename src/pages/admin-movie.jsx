import React, {useState, useEffect} from 'react';
import useApi from '../utils/useApi'
import Header from '../components/Header';
import imageSpiderman from '../assets/images/Rectangle 119.png'
import iconDelete from '../assets/images/icons/Delete.png'
import iconEdit from '../assets/images/icons/Edit.png'
import iconShow from '../assets/images/icons/eye.png'
import imageGrafik from '../assets/images/Graph lines.png'
import '../custom-css/form-movie.css'

function AdminMovie () {
    const api = useApi();
    const [movies, setMovies] = useState(null);
    const [totalData, setTotalData] = useState(0)
    const [limitPage, setLimitPage] = useState(5)
    const [curentPage, setCurrentPage] = useState(1)
    const [totalPagination, setTotalPagination] = useState(null)
    const totalButton = [...Array(Math.ceil(totalData/limitPage))]

    useEffect(() => {
            api({ method: 'GET', url: '/movie?page=1&limit=5' })
            .then(({ data}) => {
                console.log(data.meta)
                setMovies(data.data)
                setTotalData(parseInt(data.meta.total))
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const handlePagination = (e) => {
        e.preventDefault()
        const btnElement = document.querySelectorAll('.btn-pagination')

        for (let i = 0; i < btnElement.length; i++) {
            btnElement[i].className = btnElement[i].className.replace("bg-[#1D4ED8]", "");
            btnElement[i].className = btnElement[i].className.replace("text-white", "");
        }

        e.target.classList.add("bg-[#1D4ED8]", "text-white");


        api({ method: 'GET', url: `/movie?page=${e.target.id}&limit=${limitPage}`})
            .then(({ data}) => {
                setMovies(data.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }
    const deleteMovie = (id) => {
        let confirmation = confirm('Apakah anda yakin ingin mengahpus movie ?')
        if (confirmation) {
            api({ method: 'DELETE', url: `/movie/${id}` })
            .then((res) => {
                console.log('Movie berhasil di hapus')
            }).catch((err) => {
                console.log(err)
            })
        } 
    } 

    return (
        <>
            <Header pageAdmin={true}/>
            <main className='font-Mulish min-h-screen bg-[#EFF0F6] md:py-16 py-28 pb-10 overflow-x-hidden'>
                <section id='movie' className='tabcontent w-[80%] bg-white mx-auto rounded-[10px] py-7 md:py-14 px-5 md:px-20 overflow-x-hidden'>
                    <div className='flex flex-col md:flex-row justify-between'>
                        <h3 className='text-[#14142B] text-nowrap text-lg md:text-2xl font-bold'>List Movie</h3>
                        <div className='relative h-[80px] md:h-fit md:w-fit flex flex-col-reverse  md:items-end md:flex-row gap-x-5'>
                            <input className='bg-[#EFF0F6] rounded-[8px] text-[#4E4B66] font-semibold font-base px-5 py-3 cursor-pointer'  type="month" name="date" id="" defaultValue={"2023-11"} />
                            <a href='/admin/movie/add' className='absolute right-0 -top-8 md:static w-[91px] h-[40px] md:h-fit md:w-fit flex flex-row justify-center items-center bg-blue-700 text-[#F7F7FC] md:font-bold font-base px-5 py-3 rounded-[8px]' > <span className='inline md:hidden' >&#65291; </span> Add <span className='hidden md:inline'> Movies</span></a>
                        </div>
                    </div>
                    <div className='overflow-x-scroll md:overflow-x-hidden'>
                        <table className="w-full border-separate border-spacing-x-4 md:border-spacing-x-0 mt-8">
                            <thead className='text-nowrap'>
                                <tr className='border-b border-slate-300 text-left md:text-center'>
                                    <th className='text-[#1F4173] text-xs font-bold py-3'>No</th>
                                    <th className='text-[#1F4173] text-xs font-bold py-3'>Thumbnail</th>
                                    <th className='text-[#1F4173] text-xs font-bold py-3'>Movie Name</th>
                                    <th className='text-[#1F4173] text-xs font-bold py-3'>Category</th>
                                    <th className='text-[#1F4173] text-xs font-bold py-3'>Released Date</th>
                                    <th className='text-[#1F4173] text-xs font-bold py-3'>Duration</th>
                                    <th className='text-[#1F4173] text-xs font-bold py-3'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {movies && movies.map((movie, index)=>{
                                    return (
                                        <tr className='border-b border-slate-300' key={movie && movie.movie_id}>
                                            <td className='md:text-center text-left text-nowrap md:px-2  text-[#1F4173] text-sm font-normal py-2'>{index + 1}</td>
                                            <td className='md:text-center text-left text-nowrap text-[#1F4173] text-sm font-normal md:ps-10 py-2'>
                                                <div className=' w-[46px] h-[38px] rounded-[10px] overflow-hidden'>
                                                    <img src={movie && movie.movie_poster} alt="" />
                                                </div>
                                            </td>
                                            <td className='md:text-center text-left text-nowrap text-[#1D4ED8] text-sm font-normal py-2'>{movie && movie.movie_name}</td>
                                            <td className='md:text-center text-left text-nowrap text-[#1F4173] text-sm font-normal py-2'>{movie && movie.genres }</td>
                                            <td className='md:text-center text-left text-nowrap text-[#1F4173] text-sm font-normal py-2'>{movie && movie.release_date}</td>
                                            <td className='md:text-center text-left text-nowrap text-[#1F4173] text-sm font-normal py-2'>{movie && movie.duration.hours} Hours {movie.duration.minutes} Minute</td>
                                            <td className='flex flex-row md:justify-end gap-x-4 text-center text-[#1F4173] text-sm font-normal py-2'>
                                                <a href={`/movie/${movie && movie.movie_id}`} className='grid items-center bg-[#1D4ED8] w-[31px] h-[31px] rounded-[6px] hover:shadow-xl shadow-indigo-500/50'><img className='block mx-auto' src={iconShow} alt="" /></a>
                                                <a href={`/admin/movie/edit/${movie.movie_id}`} className='grid items-center bg-[#5D5FEF] w-[31px] h-[31px] rounded-[6px]'><img className='block mx-auto' src={iconEdit} alt="" /></a>
                                                <a href='' className='grid items-center bg-[#E82C2C] w-[31px] h-[31px] rounded-[6px]' 
                                                onClick={(event) => { 
                                                        deleteMovie(movie.movie_id)}
                                                    }>
                                                        <img className='block mx-auto' src={iconDelete} alt="" />
                                                </a>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className='flex flex-row gap-x-3 justify-center mt-8'>
                        {
                            totalData && totalButton.length > 1 ? 
                            totalButton.map((number, index) => {
                                    return <button id={index + 1} key={index + 1} className={`btn-pagination ${index == 0 ? 'bg-[#1D4ED8] text-white' : ''} md:w-[40px] md:h-[40px] w-[30px] h-[30px] text-xs  rounded-[8px] border border-[#DEDEDE] text-[#4E4B66] font-lg font-normal`} type="button" onClick={handlePagination}>{index + 1}</button>
                                })
                            : ''
                        }
                    </div>
                </section>
            </main>
        </>
    )
}

export default AdminMovie;