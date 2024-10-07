import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "../pages/Login";
 

export default function Logeduserourter(){
const user = useSelector((user)=> user.login.login);

return user ? <Outlet/> : <Login/>
}