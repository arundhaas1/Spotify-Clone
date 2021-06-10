import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';

function Footer() {
    return (
        <div className="footer">
            <div className="left">
                <p>song details</p>
            </div>

            <div className="center">
                <ShuffleIcon classNama="footergreen" />
                <SkipPreviousIcon className="footericon"/>
                <PlayCircleOutlineIcon fontSize="large" className="footericon"/>
                <SkipNextIcon className="footericon" />
                <RepeatIcon className="footericon" />
            </div>

            <div className="right">
                <p>volume</p>
            </div>
        </div>
    )
}

export default Footer
