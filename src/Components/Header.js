import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import { Avatar } from '@material-ui/core'
import {useDataLayerValue} from '../DataLayer'

function Header() {

    const[{user},dispatch] = useDataLayerValue();

    return (
        <div className="header">
            <div className="headleft">
               <SearchIcon className="searchicon" />
               <input 
               placeholder="Search for Artists,Songs"
               />
            </div>

            <div className="headright">
                <Avatar className="avatar" slt={user?.images[0]?.url} src="" />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
