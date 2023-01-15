import { useState } from "react";

const useAuth = (code)=> {
const [AccessToken, setAccessToken] = useState()
const [refreshToken, setRefreshToken] = useState()
const [expiresIn, setExpiresIn] = useState()
}

export default useAuth;