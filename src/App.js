import  React,{useEffect,useState} from 'react'
import './App.css';
import Login from './Components/Login'
import 'tachyons'
import { getTokenFromUrl } from './Components/Spotify'

function App() {

  const[token,setToken]=useState(null)

  useEffect(() => {
    const hash = getTokenFromUrl ()
      window.location.hash="";
      const _token= hash.access_token
        console.log (_token)

    if (_token) {
      setToken(_token)
    }

  }, [])
  return (
    <div className="app">
       {token ?
        (<h1>ram</h1>) : 
         ( <Login />) }

    </div>
  );
}

export default App;
