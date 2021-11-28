import { Route, Routes } from "react-router-dom";
import { useUserContext } from '../../Contexts/Context';
import { useNavigate } from "react-router";
import  PrivateRoute from '../../Components/PrivateRoute/PrivateRoute';
 import { useEffect } from "react";
import { handleBreakpoints } from "@mui/system";



  export default function User() {
    const navigate = useNavigate()
    const { Exit } = useUserContext()

  const EnterHandler = () => {
    Exit()
    navigate("/user")
}

const EnterFavorite = () => {
    navigate("/userfavorite")
}

const LogoutHandler = () => {
    Exit()
    navigate("/")
}


  return (
    <>
       <div className="flex flex-mrap px-6 py-10 justify-center items-center">
    </div>
    <button onClick={LogoutHandler}>Logout</button>
    <div className="flex flex-mrap px-6 py-10 justify-center items-center">
    </div>
      <Routes>
      </Routes>
    </>
  );

}
