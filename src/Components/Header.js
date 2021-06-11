import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import { Avatar } from '@material-ui/core'
import {useDataLayerValue} from '../DataLayer'

function Header({spotify}) {

    const[{user},dispatch] = useDataLayerValue();

    return (
        <div className="header">
            <div className="headleft">
               <SearchIcon className="searchicon" />
               <input 
               placeholder="Search for Artists,Songs"
               type="text"
               />
            </div>

            <div className="headright">
                <Avatar className="avatar" src={user?.images[0]?.url} alt="" />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
