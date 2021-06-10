import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="logo">
                <img  alt="" src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol-500x152.jpg"></img>
            </div>
            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

            <br />
            <strong className="playlisttitle">PLAYLISTS</strong>
            <hr />
        </div>
    )
}

export default Sidebar
