import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import useApi from '../utils/useApi'
import { loginUser, loginAdmin } from '../store/reducer/user'
import iconTickitz from '../assets/images/icons/icon-tickitz.png'
import iconEye from '../assets/images/icons/icon-eye.svg'
import iconEyeHidden from '../assets/images/icons/eye-password-hide-svgrepo-com.svg'
import iconGoogle from '../assets/images/icons/google-icon.png'
import iconFb from '../assets/images/icons/fb-icon.png'
import '../custom-css/sign-in.css'
import Alert from '../components/Alert'
import Loading from '../components/Loading'


function SignIn () {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const api = useApi();

    const [userData, setUserData] = useState({});
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const {isAuthUser, isAuthAdmin} = useSelector((state) => state.users)

    useEffect(() => {
        if (isAuthAdmin) {
            navigate('/admin/dashboard');
        }
        if (isAuthUser) {
            navigate('/profile');
        }
    }, [isAuthUser, isAuthAdmin]);

    const changeHanlder = (e) => {
        const data = { ...userData }
        data[e.target.name] = e.target.value
        setUserData(data)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setLoading(true)

        api({
            method: 'POST',
            url: '/auth',
            data: userData
        })
            .then(({ data }) => {
                setLoading(false)
                setMessage('Login Berhasil')
                setTimeout(() => {
                    console.log(data)

                    if(data.role == 'admin'){
                        dispatch(loginAdmin(data))
                    }else{
                        dispatch(loginUser(data))
                    }

                }, 1500)
            })
            .catch((err) => {
                setLoading(false)
                setMessage(err.response.data.message)
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

    return (
            <main className='con-page-sigin'>
                <div className="icon-tickitz">
                    <img src={iconTickitz} alt="icon tickitz"/>
                </div>
                <section className='con-form'>
                    <h2 className="welcome-text">Welcome Back <span>&#128075;</span></h2>
                    <p className="sub-text-welcome">Sign in with your data that you entered during your registration</p>
                    <form className="form-sign-in" onSubmit={(event) => {submitHandler(event)}}>
                        <div className="con-input">
                            <label htmlFor="input-email">Email</label>
                            <input type="email" name="email_user" id="input-email" placeholder="Enter your email" required onChange={changeHanlder} />
                        </div>
                        <div className="con-input">
                            <label htmlFor="input-password">Password</label>
                            <input type="password" name="password" id="input-password" placeholder="Enter your password" required autoComplete='current-password' onChange={changeHanlder} />
                            <button className="show-password" type="button" onClick={() => showPassword()}>
                                <img className="icon-show-password show" src={iconEye} alt=""/>
                                <img className="icon-hidden-password" src={iconEyeHidden} alt=""/>
                            </button>
                        </div>
                        <a href="/sign-in" className="forget-password w-fit self-end">Forgot your password?</a>
                        <input className="btn-submit" type="submit" value="Login" />
                    </form>
                    <div className="link-login">
                        <p>Don&apos;t have an account yet ?</p>
                        <Link classNameName="" to={"/sign-up"}>Sign Up</Link>
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
                            <img className="icon" src={iconFb} alt="icon-facebook"/>
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

export default SignIn;