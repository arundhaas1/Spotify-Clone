import React from 'react'
import './Body.css'
import Header from './Header'
import {useDataLayerValue} from '../DataLayer'
function Body(Spotify) {

  const[{discover_weekly},dispatch] = useDataLayerValue();


    return (
        <div className="body">
            <Header Spotify={Spotify} />

            <div className="infos">
                    <img alt="" src={discover_weekly?.images[0].url} />
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
