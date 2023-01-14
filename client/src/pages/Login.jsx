import React from "react";
import { blackLogo } from "../assets";

const Login = () => {
  const client_id = "2dba1902f6c941aeb5d5f283a7e2e873";
  const redirect_uri = "http://localhost:3000/";
  const api_uri = "https://accounts.spotify.com/authorize";
  const scope = [
    "user-read-private",
    "user-read-email",
    "user-modify-playback-state",
    "user-read-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-top-read",
  ];

  const AUTH_URL = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
    " "
  )}&response_type=code`

  return (
    <div className="h-screen bg-[#1CDF63] flex justify-center items-center">
      <div className=" text-center">
        <img
          src={blackLogo} 
          alt="Spotify logo"
          width={400}
          className=" mb-10"
        />
        <a href={AUTH_URL} className="transition text-xl bg-black rounded-full px-20 py-4 text-[#1CDF63] hover:bg-[#ffffff]">
          Connect Spotify
        </a>
      </div>
    </div>
  );
};

export default Login;
