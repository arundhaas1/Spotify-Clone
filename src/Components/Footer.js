import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import {Grid,Slider} from '@material-ui/core'

function Footer() {
    return (
        <div className="footer">
            <div className="left">
                <img className="songlogo" alt="" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/dj-poster-design-template-c76fc4c98d760d79f99e41db6b853d79.jpg?ts=1561541144" />
                <div className="info">
                    <h4>Yeah!</h4>
                    <p>Usher</p>
                </div>
            </div>

            <div className="middle">
                <ShuffleIcon className="footergreen" />
                <SkipPreviousIcon className="footericon"/>
                <PlayCircleOutlineIcon fontSize="large" className="footericon"/>
                <SkipNextIcon className="footericon" />
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
                        <Slider />
                    </Grid>

                </Grid>
            </div>
        </div>
    )
}

export default Footer
