import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { blackLogo } from "../assets";
import { setAccessToken } from "../redux/features/authSlice";

const Login = () => {
  const client_id = "433bb4eb4b944395a67bed716630a544";
  const secret_id = "dccf66811af8463caf10143435341f75";
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.accessToken)

  useEffect(() => {
    console.log(token,'token')
  },[token])

  const loginSpotify =() => {
    axios.post('https://accounts.spotify.com/api/token',`grant_type=client_credentials&client_id=${client_id}&client_secret=${secret_id}`,{
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(res => {
      dispatch(setAccessToken({accessToken:res.data.access_token,expiresIn:res.data.expires_in}))
    })

  }


  return (
    <div className="h-screen bg-[#1CDF63] flex justify-center items-center">
      <div className=" text-center">
        <img
          src={blackLogo} 
          alt="Spotify logo"
          width={400}
          className=" mb-10"
        />
        <button onClick={loginSpotify} className="transition text-xl bg-black rounded-full px-20 py-4 text-[#1CDF63] hover:bg-[#ffffff]">
          Connect Spotify
        </button>
      </div>
    </div>
  );
};

export default Login;
