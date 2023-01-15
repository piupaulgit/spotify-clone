import { useEffect, useState } from "react";
import {useLoginUserQuery} from '../redux/services/spotifyApis'

const useAuth = (code) => {
  const [AccessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();
  const {data, isFetching, error} = useLoginUserQuery()
  useEffect(() => {
    console.log("userauth",code,data);
  }, [code]);
};

export default useAuth;
