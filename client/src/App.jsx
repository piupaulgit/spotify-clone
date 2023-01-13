import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Spotify from './components/Spotify';
import Login from './pages/Login';
import { setUserToken } from './redux/features/authSlice';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
   
    const hash = window.location.hash;
    if(hash){
      const tkn = hash.substring(1).split("&")[0].split("=")[1]
      localStorage.setItem("token",tkn)
       dispatch(setUserToken(tkn))
       window.history.pushState({},null,'/')
    } 
    
  },[])
  return (
    <>
      {
        !token ? <Login/>:<Spotify/>
      }
    </>
  )
};

export default App;
    
