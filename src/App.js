import  React,{useEffect,useState} from 'react'
import './App.css';
import Login from './Components/Login'
import 'tachyons'
import { getTokenFromUrl } from './Components/Spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Components/Player.js'
import {useDataLayerValue} from './DataLayer' 

function App() {

  const[{user,token},dispatch] = useDataLayerValue();

  const Spotify = new SpotifyWebApi()
  // const[token,setToken]=useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl ()
      window.location.hash="";
      const _token= hash.access_token
        // console.log (_token)

    if (_token) {

      dispatch({
        type : 'SET_TOKEN',
        token : _token
      })

      // setToken(_token);

      Spotify.setAccessToken(_token);

      Spotify.getMe().then(user=>{
        dispatch({
          type:'SET_USER',
          user : user
        })
      })

      Spotify.getUserPlaylists().then(playlists=>{
        dispatch({
          type : 'SET_PLAYLISTS',
          playlists :playlists
        })
        
      })
    }

  }, [])

  console.log('hi' ,token);
  return (
    <div className="app">
       {token ?
        (<Player Spotify={Spotify}/>) : 
         ( <Login />) }

    </div>
  );
}

export default App;
