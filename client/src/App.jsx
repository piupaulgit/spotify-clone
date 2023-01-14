import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Spotify from './components/Spotify';
import Login from './pages/Login';
import { setUserToken } from './redux/features/authSlice';
const code = new URLSearchParams(window.location.search).get("code")

const App = () => {
  // console.log(code)
  // const dispatch = useDispatch();
  // const [token,setToken] = useState("")
  // useEffect(() => {
   
  //   const hash = window.location.hash;
  //   if(hash){
  //     const tkn = hash.substring(1).split("&")[0].split("=")[1]
  //     localStorage.setItem("token",tkn)
  //      dispatch(setUserToken(tkn))
  //     //  window.history.pushState({},null,'/')
  //   } 
    
  // },[token])
  return code ? <Spotify code={code} /> : <Login />
};

export default App;
    
