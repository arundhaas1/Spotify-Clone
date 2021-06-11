import React,{useEffect,useState} from 'react'
import './Footer.css'
import {useDataLayerValue} from '../DataLayer'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import {Grid,Slider} from '@material-ui/core'

function Footer({spotify}) {

     const [{ token, item, playing }, dispatch] = useDataLayerValue();

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {
      console.log(r);

      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing,
      });

      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
    });
  }, [spotify]);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  const skipNext = () => {
    spotify.skipToNext();
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
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
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
  };
    return (
        <div className="footer">
            <div className="left">
                <img className="songlogo" alt="" src={item?.album.images[0].url} />
                {item ? (
                      <div className="info">
                      <h4>{item.name}</h4>
                      <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
                  </div>              
                ):
               (<div>
                    <h4>No Song is playing</h4>
                    <p>...</p>
                </div>)
                }
            </div>

            <div className="middle">
                <ShuffleIcon className="footergreen" />
                <SkipPreviousIcon className="footericon" onClick={skipNext}/>
                {playing ? (
                     <PauseCircleOutlineIcon onClick={handlePlayPause} fontSize="large" className="footericon"/>
                ):
                (
                    <PlayCircleOutlineIcon onClick={handlePlayPause} fontSize="large" className="footericon"/>
                )}
              
                <SkipNextIcon onClick={skipPrevious} className="footericon" />
                <RepeatIcon className="footergreen" />
            </div>

            <div className="right">
                <Grid container spacing={2}>
                    <Grid item >
                        <PlaylistPlayIcon />
                    </Grid>
                        
                    <Grid item >
                        <VolumeDownIcon />
                    </Grid>

                    <Grid item xs>
                        <Slider  aria-labelledby="continuous-slider" />
                    </Grid>

                </Grid>
            </div>
        </div>
    )
}

export default Footer
