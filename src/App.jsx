import { useState } from 'react';
import { useEffect } from 'react';
import {useSelector } from 'react-redux';
import Spotify from './components/Spotify';
import Login from './pages/Login';

const App = () => {
  const [isHavingToken, setIsHavingToken] = useState(false)
  const tokenDetail = useSelector((state) => state.auth)

  useEffect(()=>{
    const accessToken = localStorage.getItem("accessToken")
    if(accessToken){
      setIsHavingToken(true)
    }else{
      setIsHavingToken(false)
    }
  },[tokenDetail])

  return isHavingToken ? <Spotify /> : <Login />
};

export default App;
    
