import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useLoginStore } from "../stores/useLoginStore";

export function useAccessTokenValid() {
  const location = useLocation();
  const { isLogin, setLogin } = useLoginStore();
  const [ isLoding, setLoding ] = useState(true);

  useEffect(() => {
    if(isLoding){
      valid();
      setLoding(false);
    }
  }, [isLoding]);

  useEffect(() => {
    if(!isLoding){
      setLoding(true);
    }
  }, [location.pathname]);

  const valid = () => {
    // AccessToken을 back으로 보내서 사용가능한지 확인
    const userAccessToken = localStorage.getItem("UserAccessToken");

    if(!userAccessToken) {
      setLogin(false);
      return;
    }
    const validAccessToken = "abcd";
    console.log(userAccessToken)
    if(userAccessToken !== validAccessToken) {
      setLogin(false);
      return;
    }
    setLogin(true);
  }

  return { isLoding }

}