import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import useApi from '../utils/useApi'
import iconTickitz from '../assets/images/icons/icon-tickitz.png'
import iconEye from '../assets/images/icons/icon-eye.svg'
import iconEyeHidden from '../assets/images/icons/eye-password-hide-svgrepo-com.svg'
import iconGoogle from '../assets/images/icons/google-icon.png'
import iconFb from '../assets/images/icons/fb-icon.png'
import '../custom-css/sign-up.css'
import Alert from '../components/Alert'
import Loading from '../components/Loading'

export default function SignUp () {
    const api = useApi()
    
    const [form, setForm] = useState({role: 'user'})
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const {isAuth} = useSelector((state) => state.users)
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuth) {
            navigate('/profile')
        }
    }, [isAuth])

    const changeHanlder = (e) => {
        const data = { ...form }
        data[e.target.name] = e.target.value
        setForm(data)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setLoading(true)

        api({
            method: 'POST',
            url: '/users',
            data: form
        })
            .then((_) => {
                setTimeout(() => {
                    navigate('/sign-in')
                }, 1500);
                setLoading(false)
                setMessage('Pendaftaran Berhasil')
            })
            .catch((err) => {
                setLoading(false)
                if (err.message == 'Network Error') {
                    setMessage('Maaf, sedang perbaikan server');
                    return;
                  }
                setMessage(err.response.data.error)
            })
    }
    const showPassword = () => {

        const elmInputPassword = document.querySelector("#input-password");
        const iconShowPassword = document.querySelector(".icon-show-password");
        const iconHiddenPassword = document.querySelector(".icon-hidden-password");

        if(elmInputPassword.type !== "password") {
            elmInputPassword.type = "password";
            iconShowPassword.classList.add("show");
            iconHiddenPassword.classList.remove("show");
            return;
        }
        
        elmInputPassword.type = "text";
        iconHiddenPassword.classList.add("show");
        iconShowPassword.classList.remove("show");
    }

    const closeAllert = (e) => {
        alertElm.classList.remove('opacity-100')
        if(e.key == 'Enter') {
            alertElm.classList.remove('opacity-100')
        }
    }


    return (
        <main className='con-page-signup'>
            <div className="icon-tickitz">
                <img src={iconTickitz} alt="icon-tickitz"/>
            </div>
            <section className="con-form">
                <div className="con-flow-sign-up">
                    <div className="con-number-flow">
                        <p className="number-flow number-1">1</p>
                        <p className="title-number-flow title-number-1">Fill Form</p>
                    </div>
                    <div className="con-line-flow">
                        <span className="line-flow">- - - - -</span>
                    </div>
                    <div className="con-number-flow">
                        <p className="number-flow">2</p>
                        <p className="title-number-flow">Activate</p>
                    </div>
                    <div className="con-line-flow">
                        <span className="line-flow">- - - - -</span>
                    </div>
                    <div className="con-number-flow">
                        <p className="number-flow">3</p>
                        <p className="title-number-flow">Done</p>
                    </div>
                </div>
                <form className="form-sign-up" action="" onSubmit={(event) => {submitHandler(event)}}>
                    <div className="con-input">
                        <label htmlFor="email_user">Email</label>
                        <input type="email" name="email_user" id="email_user" placeholder="Enter your email" required autoComplete='email' onChange={changeHanlder}/>
                    </div>
                    <div className="con-input">
                        <label htmlFor="input-password">Password</label>
                        <input type="password" name="password" id="input-password" placeholder="Enter your password" required autoComplete='current-password' onChange={changeHanlder}/>
                        <button className="show-password" type="button" onClick={() => showPassword()}>
                            <img className="icon-show-password show" src={iconEye} alt=""/>
                            <img className="icon-hidden-password" src={iconEyeHidden} alt=""/>
                        </button>
                    </div>
                    <label className="con-rules" htmlFor="term">I agree to terms & conditions
                        <input type="checkbox" name="term" id="term"/>
                        <span className="checkmark"></span>
                    </label>
                    <input className="btn-submit" type="submit" value="Join For Free Now"/>
                </form>
                <div className="link-login">
                    <p>Already have an account?</p>
                    <Link className="a" to={"/sign-in"}>Log in</Link>
                </div>
                <div className="con-line-or">
                    <hr/>
                    <p>Or</p>
                    <hr/>
                </div>
                <div className="con-logo-sosmed">
                    <a className="logo-sosmed">
                        <img className="icon" src={iconGoogle} alt="icon-google"/>
                        <p>Google</p>
                    </a>
                    <a className="logo-sosmed">
                        <img className="icon" src={iconFb} alt=""/>
                        <p>Facebook</p>
                    </a>
                </div>
            </section>
            {/* alert notification */}
            {loading ? <Loading /> : ''}
            {message ? <Alert msg={message} setMsg={setMessage} /> : ''}
        </main>
    )
}