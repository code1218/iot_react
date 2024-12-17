import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import UserAuthRoute from "./UserAuthRoute";
import UserSignInAndUp from "./UserSignInAndUp";

function UserRoute() {
  return <>
    <Routes>
      <Route path="/auth/*" element={ <UserSignInAndUp /> } />
      <Route path="/mypage/:username" element={ <h1>USER MYPAGE</h1> } />
      <Route path="/*" element={ <UserAuthRoute /> } />
    </Routes>
  </>
}

export default UserRoute;