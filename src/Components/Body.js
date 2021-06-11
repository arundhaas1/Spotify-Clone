import React from 'react'
import './Body.css'
import Header from './Header'
import {useDataLayerValue} from '../DataLayer'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow.js'




function Body({spotify}) {

  const[{discover_weekly},dispatch] = useDataLayerValue();

  const playPlaylist = (id) => {

    // console.log('spotify',spotify)
    spotify
      .play({
        context_uri: [`spotify:playlist:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
      console.log('hii');
    
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        //   console.log ('res  is' ,res) 
        spotify.getMyCurrentPlayingTrack().then((r) => {
            // console.log("r is",r)
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
         


          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        })
        .catch(e=>console.log(e))
      });
  };


    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="infos">
                    <img alt="" src={discover_weekly?.images[0].url} />
                    <div className="infotext">
                        <strong>PLAYLIST</strong>
                        <h2>{discover_weekly?.name}</h2>                                           
                        <p>{discover_weekly?.description}</p>
                    </div>
            </div>
            <div className="bodysongs">
                          <div className="bodyicons">
                            <PlayCircleFilledIcon className="body__shuffle pi" onClick= {playPlaylist}/>
                            <FavoriteIcon fontSize="large" className="fi" />
                            <MoreHorizIcon className="mi" />
                          </div>

                          <div>
                              {/* songs */}
                              {discover_weekly?.tracks.items.map(item=>{
                                  return <SongRow track={item.track} playSong={playSong} />
                              })}
                          </div>
                    </div>
           
        </div>
    )
}

export default Body
