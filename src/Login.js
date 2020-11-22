/* eslint-disable no-undef */
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import React, { useState } from 'react';
import { auth } from "./firebase";

function Login() {

    const history = useHistory();

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password).then((auth) => {

            if (auth) {
                history.push('/')
            }
        })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email, password).then((auth) => {

            if (auth) {
                history.push('/')
            }
        })
            .catch(error => alert(error.message))
    }

    return (

        <div className="login">
            <Link to='/'>
                <img className="login__logo" src="https://i.pinimg.com/originals/a3/d8/1c/a3d81c7da26fe6516948feeab044c505.png" alt="logo" />
            </Link>

            <div className="login__container">
                <h1>
                    Sign in
                </h1>
                <form>
                    <h5>
                        E-mail
                    </h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}></input>

                    <h5>
                        Password
                    </h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}></input>

                    <button type='submit' onClick={signIn} className="login__signinbutton">Sign in</button>

                </form>


                <button onClick={register} className="login__registerbutton">Create your Account</button>
            </div>


        </div>
    )
}

export default Login
