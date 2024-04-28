import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import useApi from '../utils/useApi'
import Header from '../components/Header';

function AddMovie () {
    const navigate = useNavigate();
    const api = useApi();
    const [data, setData] = useState({})
    const [genre, setGenre] = useState([])
    const [casts, setCasts] = useState([])
    const [hours, setHours] = useState('')
    const [minutes, setMinutes] = useState('')
    const [duration, setDuration] = useState('')

    const handlerHours = (e) => {
        setHours(e.target.value)
    }
    const handlerMinutes = (e) => {
        setMinutes(e.target.value)
        
    }

    useEffect(() => {
        setDuration(`${hours} hours ${minutes} minutes`)
    }, [hours, minutes])

    const changeHanlder = (e) => {
        const datas = { ...data }
        datas[e.target.name] = e.target.value
        setData(datas)
    }

    const changeHanlderGenre = (e) => {
        let genres = []
        let genreValueInput = e.target.value.split(', ')
        for (let i = 0; i < genreValueInput.length; i++) {
            let genValue = genreValueInput[i].toLowerCase();
            switch (genValue) {
                case 'adventure':
                    genres.push(1)
                    break;
                case 'action':
                    genres.push(2)
                    break;
                case 'fantasy':
                    genres.push(3)
                    break;
                case 'comedy':
                    genres.push(4)
                    break;
                case 'family':
                    genres.push(5)
                    break;
                case 'drama':
                    genres.push(6)
                    break;
                case 'sci-fi':
                    genres.push(7)
                    break;
                case 'crime':
                    genres.push(8)
                    break;
                case 'horror':
                    genres.push(9)
                    break;
                case 'romance':
                    genres.push(10)
                    break;
                case 'thriller':
                    genres.push(11)
                    break;
            }
        }
        setGenre(genres);

    }

    const handlerCast = (e) => {
        let cast = e.target.value.split(', ');
        setCasts(cast)
    }

    const fileHandler = (event) => {
        const file = event.target.files[0]
        if (file) {
            const tmpdata = { ...data }
            tmpdata['image'] = file

            let reader = new FileReader()
            reader.onload = () => {
                tmpdata['img'] = reader.result
                setData(tmpdata)
            }
            reader.readAsDataURL(file)
        }
    }

    const handlerAddMovie = (e) =>{
        e.preventDefault()

        api({
            method: 'POST',
            url: '/movie',
            headers: { 'Content-Type': 'multipart/form-data' },
            data: {...data, casts, duration, genre}
        })
            .then((res) => {
                alert('Movie added successfully')
                navigate('/admin/movie')
            })
            .catch((err) => {
                alert('Error')
                console.log(err)
        })
    }
    
    return (
        <>
            <Header pageAdmin={true}/>
            <main className='font-Mulish min-h-screen mt-16 md:mt-24 bg-[#EFF0F6] py-20 overflow-x-hidden'>
                <section id='movie-form' className=' md:w-[50%] bg-white rounded-[6px] p-10 mx-auto'>
                        <h3 className='font-bold text-[#14142B] text-[24px]'>Add New Movie</h3>
                        <form action="" className='flex flex-col gap-y-5 mt-5' onSubmit={(event)=> {handlerAddMovie(event)}}>
                            <div className='flex flex-col gap-y-3'>
                                <label className='font-normal text-[#696F79] text-base' htmlFor="file">Upload Image</label>
                                <input className='btn-upload' type="file" id="file" name="image" accept=".png, .jpg, .jpeg" onChange={fileHandler}/>
                            </div>
                            <div className='flex flex-col gap-y-3'>
                                <label className='font-normal text-[#696F79] text-base' htmlFor="name">Movie Name</label>
                                <input className=' border border-[#DEDEDE] rounded-[4px] bg-[#FCFDFE] py-4 px-3' name='movie_name' type="text" id='name' required onChange={changeHanlder} />
                            </div>
                            <div className='flex flex-col gap-y-3'>
                                <label className='font-normal text-[#696F79] text-base' htmlFor="category">Category</label>
                                <input className=' border border-[#DEDEDE] rounded-[4px] bg-[#FCFDFE] py-4 px-3' type="text" name="category" id="category" required onChange={changeHanlderGenre} />
                            </div>
                            <div className='w-full flex flex-row justify-between'>
                                <div className='w-[40%] flex flex-col gap-y-3'> 
                                    <label className='font-normal text-[#696F79] text-base' htmlFor="release">Release date</label>
                                    <input className=' border border-[#DEDEDE] rounded-[4px] bg-[#FCFDFE] py-4 px-3' type="date" name="release_date" id="release" required onChange={changeHanlder}/>
                                </div>
                                <div className=' w-[40%] flex flex-col gap-y-3'>
                                    <label className='font-normal text-[#696F79] text-base' htmlFor="">Duration (hour / minutue)</label>
                                    <div className='flex flex-row justify-between'>
                                        <input className=' w-[40%] border border-[#DEDEDE] rounded-[4px] bg-[#FCFDFE] py-4 px-3' type="number" name="hour" required id="" onChange={handlerHours}/>
                                        <input className=' w-[40%] border border-[#DEDEDE] rounded-[4px] bg-[#FCFDFE] py-4 px-3' type="number" name="minute" required id="" onChange={handlerMinutes}/>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-3'>
                                <label className='font-normal text-[#696F79] text-base' htmlFor="director">Director name</label>
                                <input className=' border border-[#DEDEDE] rounded-[4px] bg-[#FCFDFE] py-4 px-3' type="text" name="directed_by" id="director" required onChange={changeHanlder}/>
                            </div>
                            <div className='flex flex-col gap-y-3'>
                                <label className='font-normal text-[#696F79] text-base' htmlFor="cast">Cast</label>
                                <input className=' border border-[#DEDEDE] rounded-[4px] bg-[#FCFDFE] py-4 px-3' type="text" name="casts" id="" required onChange={handlerCast}  />
                            </div>
                            <div className='flex flex-col gap-y-3'>
                                <label className='font-normal text-[#696F79] text-base' htmlFor="synopis">Synopsis</label>
                                <textarea className=' border border-[#DEDEDE] rounded-[4px] bg-[#FCFDFE] py-4 px-3' name="synopsis" id="synopsis" cols="30" rows="10" required onChange={changeHanlder}></textarea>
                            </div>
                            <div className='flex flex-col gap-y-3'>
                                <label className='font-normal text-[#696F79] text-base' htmlFor="location">Add location</label>
                                <input className=' border border-[#DEDEDE] rounded-[4px] bg-[#FCFDFE] py-4 px-3' type="text" name="location" id="" />
                            </div>
                            <div className='flex flex-col gap-y-3'>
                                <label className='font-normal text-[#696F79] text-base' htmlFor="show-date">Set Date & Time</label>
                                <input className='w-[30%] text-[#4E4B66] text-base font-semibold bg-[#EFF0F6] p-3' type="date" name="show-date" id="" />
                                <div className='flex flex-row gap-x-7 border-b-2 border-[#DEDEDE] pb-3 mt-3'>
                                    <input className='border border-[#5F2EEA] rounded-[3px] p-2 cursor-pointer ' type="time" name="time" id="" defaultValue={'08:30'} />
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

export default AddMovie;