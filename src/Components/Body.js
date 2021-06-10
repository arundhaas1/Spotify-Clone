import React from 'react'
import './Body.css'
import Header from './Header'

function Body(Spotify) {
    return (
        <div className="body">
            <Header Spotify={Spotify} />

            <div className="infos">
                    <img alt="" src="https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly.png" />
                    <div className="infotext">
                        <strong>PLAYLIST</strong>
                        <h2>Discover Weekly</h2>
                        <p>Description...</p>
                    </div>
            </div>

           
        </div>
    )
}

export default Body
