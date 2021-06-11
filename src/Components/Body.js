import React from 'react'
import './Body.css'
import Header from './Header'
import {useDataLayerValue} from '../DataLayer'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow.js'


function Body(Spotify) {

  const[{discover_weekly,playlists},dispatch] = useDataLayerValue();


    return (
        <div className="body">
            <Header Spotify={Spotify} />

            <div className="infos">
                    <img alt="" src={discover_weekly?.images[0].url} />
                    <div className="infotext">
                        <strong>{discover_weekly?.name}</strong>
                        <h2>Discover Weekly</h2>                                           
                        <p>{discover_weekly?.description}</p>
                    </div>
            </div>
            <div className="bodysongs">
                          <div className="bodyicons">
                            <PlayCircleFilledIcon className="body__shuffle pi"/>
                            <FavoriteIcon fontSize="large" className="fi" />
                            <MoreHorizIcon className="mi" />
                          </div>

                          <div>
                              {/* songs */}
                              {discover_weekly?.tracks.items.map(item=>{
                                  return <SongRow track={item.track} />
                              })}
                          </div>
                    </div>
           
        </div>
    )
}

export default Body
