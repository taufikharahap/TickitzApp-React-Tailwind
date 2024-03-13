import React, {useState, useEffect} from 'react';
import iconTickitz from '../assets/images/icons/icon-tickitz.png'
import iconEye from '../assets/images/icons/icon-eye.svg'
import iconEyeHidden from '../assets/images/icons/eye-password-hide-svgrepo-com.svg'
import iconGoogle from '../assets/images/icons/google-icon.png'
import iconFb from '../assets/images/icons/fb-icon.png'
import '../custom-css/sign-in.css'


function SignIn () {

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
                    <form className="form-sign-in" action="">
                        <div className="con-input">
                            <label htmlFor="input-email">Email</label>
                            <input type="email" name="email" id="input-email" placeholder="Enter your email" required />
                        </div>
                        <div className="con-input">
                            <label htmlFor="input-password">Password</label>
                            <input type="password" name="password" id="input-password" placeholder="Enter your password" required autoComplete="password" />
                            <button className="show-password" type="button" onClick={() => showPassword()}>
                                <img className="icon-show-password show" src={iconEye} alt=""/>
                                <img className="icon-hidden-password" src={iconEyeHidden} alt=""/>
                            </button>
                        </div>
                        <a href="" className="forget-password">Forgot your password?</a>
                        <input className="btn-submit" type="submit" value="Login"/>
                    </form>
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
            </main>
    )
}

export default SignIn;