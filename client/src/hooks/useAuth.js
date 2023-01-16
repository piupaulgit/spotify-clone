import { useEffect, useState } from "react";
import {useLoginUserQuery} from '../redux/services/spotifyApis'
import axios from 'axios'
const useAuth = (code) => {
  const [AccessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();
  const {data, isFetching, error} = useLoginUserQuery()
  console.log(code,'code')
  useEffect(() => {
    axios
    .post("http://localhost:3001/login2", {
      "code":"AQB8ijPz4AEx0dZarEhQ6SPTKq5uXLZW5IZXqRvhqkpCcFaDIwhWrw0fVopc0ZQu7XTs4PcyfW7jGr2xKc6nZaMZkKXixG2cwfpRNbkqNvUhJbJWCrEzexCstmy-8JzHcCIrMj9aPFamzoe87oCkNN9Vj_wskQ_SqDP4DKi6VWzJL9lJOPgS1V3NYH9iYcOk0NmTVIRCixCtw2HMhhWvT_wHEeVt-90d60Va8hOJpENCnKuMkCaIHL9tCGZCa_mjtFkGzEMOhHsZ1ZHUFm9_P9o7xNTELkpNZjIEGJCi7IR5gnOUkWR7XcDL-q2zFTHauSx_mIBikj_Dp2VufTBUahj7yQuDYeYmiCG0Uonu0DIDu1KifGEIPAvBzg",
    })
    .then(res => {
      setAccessToken(res.data.accessToken)
      setRefreshToken(res.data.refreshToken)
      setExpiresIn(res.data.expiresIn)
    })
  }, [code]);
};

export default useAuth;
