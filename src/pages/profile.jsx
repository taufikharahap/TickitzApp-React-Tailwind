import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import Header from '../components/Header';
import iconSideProfile from '../assets/images/icons/Ellipse side.png'
import iconStar from '../assets/images/icons/eva_star-fill.png'
import iconCineOne from '../assets/images/icons/CineOne21 2.png'
import iconForward from '../assets/images/icons/Forward.png'
import iconForwardDown from '../assets/images/icons/Forward-down.png'
import iconEbv from '../assets/images/icons/ebv.id 2.png'
import useApi from '../utils/useApi'
import { useSelector } from 'react-redux'
import iconNoPhoto from '../assets/images/icons/no-photo-profile.png'
import Alert from '../components/Alert'
import Loading from '../components/Loading'



function Profile () {
    const api = useApi()
    const params = useParams()
    const {user_id} = useSelector((state) => state.users)
    
    const [data, setData] = useState(null)
    const [photo, setPhoto] = useState('')
    const [phone, setPhone] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const [pageOrderHistory, setPageOrderHistory] = useState(false)

    const getDataProfile = () => {
        setLoading(true)
        api({ 
            method: 'GET',
            url: `/users/${user_id}` 
        })
        .then((res) => {
            setData(res.data.data[0])
            setPhone(res.data.data[0].phone_number)
            setLoading(false)
        })
        .catch((err) => {
            setLoading(false)
            console.log(err)
        })
    }

    useEffect(() => {
        getDataProfile()
    }, [])
    
    const showProfilePage = (evt, tabName) => {
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
        
        if (tabName == 'order-history') {
            setPageOrderHistory (true)
        }else {
            setPageOrderHistory(false)
        }
    }
    
    const changeHanlder = (e) => {
        const datas = { ...data }
        datas[e.target.name] = e.target.value.toLowerCase()
        setData(datas)
    }

    const changeHanlderNewPassword = (e) => {
        setNewPassword(e.target.value)
    }

    const changeHanlderComfirmPassword = (e) => {
        setConfirmPassword(e.target.value)

        const datas = {...data}

        datas[e.target.name] = e.target.value

        setData(datas)
    }

    const changeHanlderPhone = (e) => {
        const datas = {...data}
        let phone_number = '+62' + phone
        let value = e.target.value
        
        if (e.target.name === 'code_reg') {
            phone_number = value + phone
        }else {
            if (value !== '' || value !== null) {
                if (parseInt(value.slice(0, 1)) !== 0) {
                    setPhone(value)
                }else {
                    setPhone(value.slice(1))
                }
            }
        }
        setData({...data, phone_number})
    }

    const fileHandler = (e) => {
        const file = e.target.files[0]
        if (file) {
            const tmpdata = { ...data }
            tmpdata['image'] = file

            let reader = new FileReader()
            reader.onload = () => {
                setPhoto(reader.result)
                setData(tmpdata)
            }
            reader.readAsDataURL(file)
        }
    }

    const removeImage = (e) => {
        const datas = {...data}
        
        let text = "Apakah anda yakin ingin mengahapus?"
        if (confirm(text) !== true) {
            return
        }

        e.preventDefault()
        datas['photo_url'] = ''
        datas['image'] = undefined
        setData(datas)
        setPhoto('')
        console.log("Succesfully!")
    }

    const handlerUpdateProfile = (e) =>{
        e.preventDefault()

        let text = "Apakah anda yakin?"
        if (confirm(text) !== true) {
            return
        }

        setLoading(true)

        if (newPassword !== confirmPassword) {
            setMessage("Password konfirmasi tidak sama")
            return
            
        }

        api({
            method: 'PATCH',
            url: `/users/${user_id}`,
            headers: { 'Content-Type': 'multipart/form-data' },
            data: data
        })
            .then((res) => {
                setLoading(false)
                setMessage("Update berhasil")
                setTimeout(() => {
                    window.location.reload();
                }, 3000)
            })
            .catch((err) => {
                setLoading(false)
                setMessage("Maaf terjadi kesalahan")
        })
    }
    
    const handleEdit = () => {
        console.log('edit')
        document.getElementById('form-edit').classList.remove('opacity-0', 'pointer-events-none')
    }

    const handleCancelEdit = () => {
        document.getElementById('form-edit').classList.add('opacity-0', 'pointer-events-none')
    }

    return (
        <>
            <Header pageProfile={true} />
            <main className="bg-[#A0A3BD33] flex flex-col md:flex-row md:justify-around md:px-14 px-5 md:py-16 pt-44 pb-10">
                <section className={`${pageOrderHistory ? "hidden md:flex" : "flex"} flex-col gap-y-0.5 md:w-1/4 mb-16 md:mb-0`}>
                    <div className="flex flex-col gap-y-4 bg-white rounded-t-xl p-10">
                        <div className="flex flex-row justify-between items-center">
                            <p className="text-[#4E4B66] text-base font-normal tracking-wider">INFO</p>
                            <button className="relative group text-blue-700 text-xl font-bold" type="button">...
                                <div className="hidden group-focus:flex hover:flex absolute -left-20 flex-col text-black md:h-fit shadow-xl hover:shadow-2xl bg-white py-3 pb-0 mt-0 rounded-[4px]">
                                    <label className="flex items-center text-base text-nowrap font-light px-2 py-2 pe-4 hover:bg-slate-100" htmlFor="file_upload">
                                        <span className="w-7  rotate-90">&#9998;</span>
                                        <p>Change</p>
                                        <input className="hidden" type="file" name="file_upload" id="file_upload" onChange={fileHandler}/>
                                    </label>
                                    {data && data.photo_url || photo ? 
                                        <button className="flex items-center justify-center text-base text-nowrap font-light px-2 py-2 pe-4 hover:bg-slate-100" onClick={removeImage}>
                                            <span className="w-7 text-red-500 font-bold">&#128465;</span>
                                            <p>Remove</p>
                                        </button>
                                        : ""
                                    }
                                </div>
                            </button>
                        </div>
                        <div className="mx-auto my-auto">
                            <img className=" w-20 h-20 rounded-full border" src={photo ? photo : data && data.photo_url !== "" ? data.photo_url : iconNoPhoto} alt=""/>
                        </div>
                        <div className="text-center">
                            <p className="text-[#14142B] text-xl font-semibold">{data && data.first_name && data.last_name ? data.first_name.slice(0, 1).toUpperCase()+data.first_name.slice(1) + " " +data.last_name.slice(0, 1).toUpperCase()+data.last_name.slice(1) : "User"}</p>
                            <span className="text-[#4E4B66] text-sm font-normal">{data ? data.title : "Moviegoers"}</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-6 bg-white overflow-hidden rounded-b-xl p-10 px-8 pb-10 md:pb-20">
                        <p className="text-[#4E4B66] text-base font-semibold">Loyalty Points</p>
                        <div className="relative h-32 w-60 overflow-hidden overflow-hidden">
                            <div className="flex flex-col gap-y-7 rounded-2xl bg-blue-700 p-5">
                                <p className="text-white text-lg font-bold">Moviegoers</p>
                                <span className="text-white text-2xl font-semibold">{data ? data.points : 0} <span className="text-xs font-normal">points</span></span>
                            </div>
                            <div className=' absolute -top-14 -right-12 w-32 h-32'>
                                <div className="absolute top-1 w-32 h-32 bg-[#FFFFFF4D] rounded-full z-[2]"></div>
                                <div className="absolute top-8 left-4 w-32 h-32 bg-[#FFFFFF4D] rounded-full"></div>
                                <img className="absolute top-14 left-5 z-[3]" src={iconStar} alt="icon"/>
                            </div>
                        </div>
                        <div>
                            <p className="text-[#4E4B66] text-base font-normal tracking-wide mb-2">{data ? (100 - parseInt(data.points)) : 0} points become a master</p>
                            <div className="relative w-full bg-[#11111129] h-4 rounded-full shadow-inner overflow-hidden">
                                <span className={`block w-[${data ? data.points/100*100 : 0}%] bg-blue-700 rounded-full h-full`}></span>
                            </div>
                        </div>
                        <button className="block md:hidden text-blue-700 font-bold text-base text-center py-3 mt-5 rounded-2xl border border-blue-700" type="button" onClick={handleEdit}>Edit Profile</button>
                    </div>
                </section>
                <section className="w-full md:static md:w-2/3 flex flex-col md:gap-y-10 overflow-x-hidden">
                    <div className="fixed top-[70px] left-0 w-screen md:w-full md:static bg-white flex justify-between md:inline md:rounded-xl px-7 z-10 ">
                        <button className="tablinks hidden md:inline text-[#14142B]  py-5 md:text-lg font-normal border-b-4 border-blue-700 mr-8" type="button" onClick={(event)=>{showProfilePage(event, 'account-setting')}}>Account Settings</button>
                        <button className="tablinks md:hidden text-[#14142B]  py-5 md:text-lg font-normal border-b-4 border-blue-700 mr-8" type="button" onClick={(event)=>{showProfilePage(event, 'account-setting')}}>Details Account</button>
                        <button className="tablinks text-[#AAAAAA] md:text-lg font-normal py-5 border-blue-700" type="button" onClick={(event)=>{showProfilePage(event, 'order-history')}}>Order History</button>
                    </div>
                    
                    {/* form */}
                    <div id='form-edit' className='opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto md:flex absolute top-[70px] left-0 md:static w-full flex-col bg-[#00000099] md:bg-transparent px-5 py-10 md:px-0 md:py-0 z-10 ease-out duration-300 md:z-20'>
                        <form  id='account-setting' className='tabcontent flex flex-col md:gap-y-10 rounded-xl md:rounded-none pb-16 md:pb-0 overflow-hidden bg-white md:bg-transparent' onSubmit={handlerUpdateProfile}>
                            <div className="w-full md:flex flex-col bg-white md:rounded-xl md:px-7 px-5 py-12 pb-5 md:pb-12 pt-5">
                                <p className="text[#14142B] text-base font-normal py-4 border-b border-[#DEDEDE] mb-10">Details Information</p>
                                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-7 gap-y-5">
                                    <div className="flex flex-col gap-y-3">
                                        <label className="text-[#4E4B66] text-base font-normal" htmlFor="first_name">First Name</label>
                                        <input className="text-[#4E4B66] text-base font-normal rounded-xl border border-[#DEDEDE] px-4 py-4" type="text" name="first_name" id="first_name" defaultValue={data && data.first_name ? data.first_name.slice(0, 1).toUpperCase()+data.first_name.slice(1) : ""} onChange={changeHanlder}/>
                                    </div>
                                    <div className="flex flex-col gap-y-3">
                                        <label className="text-[#4E4B66] text-base font-normal" htmlFor="last_name">Last Name</label>
                                        <input className="text-[#4E4B66] text-base font-normal rounded-xl border border-[#DEDEDE] px-4 py-4" type="text" name="last_name" id="last_name" defaultValue={data && data.last_name ? data.last_name.slice(0, 1).toUpperCase()+data.last_name.slice(1) : ""} onChange={changeHanlder}/>
                                    </div>
                                    <div className="flex flex-col gap-y-3">
                                        <label className="text-[#4E4B66] text-base font-normal" htmlFor="email_user">E-mail</label>
                                        <input className="text-[#4E4B66] text-base font-normal rounded-xl border border-[#DEDEDE] px-4 py-4" type="email" name="email_user" id="email_user" defaultValue={data && data.email_user} onChange={changeHanlder}/>
                                    </div>
                                    <div className="flex flex-col gap-y-3">
                                        <label className="text-[#4E4B66] text-base font-normal" htmlFor="phone">Phone Number</label>
                                        <div className="flex flex-row rounded-xl border border-[#DEDEDE] px-4 py-4">
                                            <select className="pe-2 me-2"  name="code_reg" id="code" onChange={changeHanlderPhone}>
                                                <option value="+62">+62</option>
                                                <option value="+60">+60</option>
                                            </select>
                                            <input className="text-[#4E4B66] text-base font-normal border-l border-[#DEDEDE] ps-3 " type="tel" name="phone" id="phone" defaultValue={phone && phone} onChange={changeHanlderPhone}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:flex flex-col bg-white md:rounded-xl md:px-7 px-5 md:py-12 pb-10 md:pt-5">
                                <p className="text[#14142B] text-base font-normal py-4 border-b border-[#DEDEDE] md:mb-10 mb-5">Account and Privacy</p>
                                <div className="grid md:grid-cols-2 gap-x-7 gap-y-5">
                                    <div className="flex flex-col gap-y-3">
                                        <label className="text-[#4E4B66] text-base font-normal" htmlFor="new_password">New Password</label>
                                        <input className="text-[#4E4B66] text-base font-normal rounded-xl border border-[#DEDEDE] focus:outline-green-500 px-4 py-4" type="password" name="new_password" id="new_password" placeholder="Write your password" defaultValue={newPassword} onChange={changeHanlderNewPassword}/>
                                    </div>
                                    <div className="flex flex-col gap-y-3">
                                        <label className="text-[#4E4B66] text-base font-normal" htmlFor="password">New Password</label>
                                        <input className={`text-[#4E4B66] text-base font-normal rounded-xl border ${newPassword == confirmPassword ? "border-[#DEDEDE] focus:outline-green-500" : 'border-red-500 focus:outline-red-500' } px-4 py-4`} type="password" name="password" id="password" placeholder="Confirm your password" onChange={changeHanlderComfirmPassword}/>
                                    </div>
                                </div>
                            </div>
                            <button className="block md:w-5/12 w-[90%] mx-auto md:mx-0 text-[#F7F7FC] text-nowrap bg-blue-700 hover:bg-blue-900 text-base font-semibold rounded-xl px-4 py-4" type="submit" >Update changes</button>
                            <button className="block md:hidden md:w-5/12 w-[90%] mx-auto md:mx-0 text-blue-700 text-nowrap border border-blue-700 text-base font-semibold rounded-xl px-4 py-4 mt-5" type="button"  onClick={handleCancelEdit}>Cancel</button>
                        </form>
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
            {/* alert notification */}
            {loading ? <Loading /> : ''}
            {message ? <Alert msg={message} setMsg={setMessage} /> : ''}
            </main>
        </>
    )
}

export default Profile;