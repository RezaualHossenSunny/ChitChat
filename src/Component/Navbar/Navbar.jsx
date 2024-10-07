import React from "react";
import {FaUserFriends } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { logedout } from "../../Feture/Slices/Loginslice";
const Navbar = () => {
  const auth = getAuth();
  const location = useLocation();

  const navigate =useNavigate()
    const dispatch =useDispatch()

  const handlesignout = ()=>{
    signOut(auth).then(() => {
      navigate('/login')
      localStorage.removeItem('user')
      dispatch(logedout())
    }).catch((error) => {
     console.log(error);
     
    });
    
  }
  
  return (
    <>
      <div className=" flex items-center justify-between bg-slate-800 py-5 rounded-md px-5">
        {/* photo */}
        <div className="flex items-center gap-x-5">
          <div className="h-14 w-14 rounded-full bg-orange-400 overflow-hidden"></div>
         
         
          <div>
             <span className="font-roboto font-bold text-white">Sunny</span>  
             </div>

        </div>

        {/* link */}
        <div className="flex items-center gap-x-5">


       <Link to='/' className={`${location.pathname == "/" ? "text-salte-500 bg-sky-400" : "text-white "} w-14 h-14 rounded-full  flex items-center justify-center`} >
       <FaUserFriends className="text-3xl    " />
       </Link>

      <Link to='/message' className={`${location.pathname == "/message" ? "text-salte-500 bg-sky-400" : "text-white "} w-14 h-14 rounded-full  flex items-center justify-center`}>

      <FaFacebookMessenger className="text-3xl  text-white" />
      </Link>
        </div>

        {/* logout */}
        <div>
          <button onClick={handlesignout} className="bg-sky-400  px-4 py-4 rounded-xl w-[100px] font-roboto text-white text-xl">Logout</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
