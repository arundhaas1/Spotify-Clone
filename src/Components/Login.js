import React from 'react'
import './Login.css'
import {loginUrl} from './Spotify'

function Login() {
    return (
        <div className="login">
            <img alt="" src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol-500x152.jpg"></img>
            <a href={loginUrl}>
              <button className="grow">LOGIN WITH SPOTIFY</button>
            </a>
        </div>
    )
}

export default Login
