import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Spotify from './components/Spotify';
import Login from './pages/Login';
const code = new URLSearchParams(window.location.search).get("code")

const App = () => {
  return code ? <Spotify code={code} /> : <Login />
};

export default App;
    
