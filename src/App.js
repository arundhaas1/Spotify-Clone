import  React,{useEffect,useState} from 'react'
import './App.css';
import Login from './Components/Login'
import 'tachyons'
import { getTokenFromUrl } from './Components/Spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Components/Player.js'

function App() {

  const Spotify = new SpotifyWebApi()
  const[token,setToken]=useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl ()
      window.location.hash="";
      const _token= hash.access_token
        // console.log (_token)

    if (_token) {
      setToken(_token);

      Spotify.setAccessToken(_token);

      Spotify.getMe().then(user=>{
        console.log(user);
      })

    }

  }, [])
  return (
    <div className="app">
       {token ?
        (<Player />) : 
         ( <Login />) }

    </div>
  );
}

export default App;
