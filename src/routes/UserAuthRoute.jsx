import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useLoginStore } from "../stores/useLoginStore";

function UserAuthRoute() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLogin } = useLoginStore();

  useEffect(() => {
    if(!isLogin) {
      navigate("/user/auth/signin");
    }
  }, [location.pathname]);

  return <>
    {
      isLogin && 
      <Routes>
        <Route path="/name" element={ <h1>USER NAME</h1> } />
        <Route path="/age" element={ <h1>USER AGE</h1> } />
        <Route path="/address" element={ <h1>USER ADDRESS</h1> } />
        <Route path="/*" element={ <h1>404 NOT FOUND</h1> } />
      </Routes>
    }
  </>
}

export default UserAuthRoute;