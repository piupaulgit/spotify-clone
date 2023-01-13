import { useState } from 'react';
import { useEffect } from 'react';
import Spotify from './components/Spotify';
import Login from './pages/Login';

const App = () => {
  const [token, setToken] = useState("")
  useEffect(() => {
    const hash = window.location.hash;
    if(hash){
      setToken(hash.substring(1).split("&")[0].split("=")[1]);
    } 
  },[token])
  return (
    <>
      {
        !token ? <Login/>:<Spotify/>
      }
    </>
  )
};

export default App;
    
