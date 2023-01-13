import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Spotify from './components/Spotify';
import Login from './pages/Login';
import { setUserToken } from './redux/features/authSlice';

const App = () => {
  const dispatch = useDispatch();
  const [token, setToken] = useState("")
  useEffect(() => {
   
    const hash = window.location.hash;
    if(hash){
      const tkn = hash.substring(1).split("&")[0].split("=")[1]
      setToken(tkn);
       dispatch(setUserToken(tkn))
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
    
