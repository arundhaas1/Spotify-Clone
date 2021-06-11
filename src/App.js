import  React,{useEffect} from 'react'
import './App.css';
import Login from './Components/Login'
import 'tachyons'
import { getTokenFromUrl } from './Components/Spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Components/Player.js'
import {useDataLayerValue} from './DataLayer' 

const s = new SpotifyWebApi()

function App() {

  const[{token},dispatch] = useDataLayerValue();
  // const[token,setToken]=useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl ()
      window.location.hash="";
      let _token= hash.access_token
        // console.log (_token)

    if (_token) {

      s.setAccessToken(_token);

      dispatch({
        type : 'SET_TOKEN',
        token : _token,
      })

      // setToken(_token);

      s.getMe().then(user=>{
        dispatch({
          type:'SET_USER',
          user : user,
        })
      })

      s.getMyTopArtists().then(response =>{
        dispatch({
          type :'SET_TOP_ARTISTS',
          top_artists: response,
        })
      })

      dispatch({
        type :'SET_SPOTIFY',
        spotify :s,
      })
      
      s.getUserPlaylists().then(playlists=>{
        dispatch({
          type : 'ADD_PLAYLISTS',
          playlists :playlists,
        })
        
      })

      s.getPlaylist("0mzSOqY6Yg2tcnhmeyJXfp").then(response=>{
        dispatch({
          type : 'SET_DISCOVER_WEEKLY',
          discover_weekly :response,
        })
      })
    }

  }, [token])

  console.log('hi' ,token);
  return (
    <div className="app">
       {token ?
        (<Player spotify={s}/>) : 
         ( <Login />) }

    </div>
  );
}

export default App;
