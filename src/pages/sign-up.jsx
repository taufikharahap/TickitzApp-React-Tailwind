import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import iconTickitz from '../assets/images/icons/icon-tickitz.png'
import iconEye from '../assets/images/icons/icon-eye.svg'
import iconEyeHidden from '../assets/images/icons/eye-password-hide-svgrepo-com.svg'
import iconGoogle from '../assets/images/icons/google-icon.png'
import iconFb from '../assets/images/icons/fb-icon.png'
import '../custom-css/sign-up.css'

export default function SignUp () {

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
                <form className="form-sign-up" action="">
                    <div className="con-input">
                        <label htmlFor="input-email">Email</label>
                        <input type="email" name="email" id="input-email" placeholder="Enter your email" required/>
                    </div>
                    <div className="con-input">
                        <label htmlFor="input-password">Password</label>
                        <input type="password" name="password" id="input-password" placeholder="Enter your password" required autoComplete/>
                        <button className="show-password" type="button" onClick={() => showPassword()}>
                            <img className="icon-show-password show" src={iconEye} alt=""/>
                            <img className="icon-hidden-password" src={iconEyeHidden} alt=""/>
                        </button>
                    </div>
                    <label className="con-rules" htmlFor="term">I agree to terms & conditions
                        <input type="checkbox" name="term" id="term" required/>
                        <span className="checkmark"></span>
                    </label>
                    <input className="btn-submit" type="submit" value="Join For Free Now"/>
                </form>
                <div className="link-login">
                    <p>Already have an account?</p>
                    <Link classNameName="a" to={"/sign-in"}>Log in</Link>
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
        </main>
    )
}