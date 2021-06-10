import React from 'react'
import './Player.css'
import Sidebar from './Sidebar'
import Body from './Body'
import Footer from './Footer'

function Player({Spotify}) {
    return (
        <div className="player">
            <div className="playerbody">
                <Sidebar />
                <Body />
            </div>
            <Footer />
        </div>
    )
}

export default Player
