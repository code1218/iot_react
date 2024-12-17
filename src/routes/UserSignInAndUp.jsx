import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useLoginStore } from "../stores/useLoginStore";
import SigninPage from "../pages/SigninPage/SiginPage";
import SignupPage from "../pages/SignupPage/SignupPage";

function UserSignInAndUp() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLogin, setLogin } = useLoginStore();
  
  useEffect(() => {
    console.log(isLogin)
    if(isLogin) {
      navigate("/")
    }
  }, [location.pathname]);

  return <>
    {
      !isLogin && 
      <Routes>
        <Route path="/signin" element={ <SigninPage /> } />
        <Route path="/signup" element={ <SignupPage /> } />
      </Routes>
    }
  </>
}

export default UserSignInAndUp;