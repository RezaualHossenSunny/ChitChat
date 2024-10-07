import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


export default function Notloginuser (){
const user = useSelector((user)=> user.login.login);

return user ? <Navigate to='/'/> : <Outlet/>
}