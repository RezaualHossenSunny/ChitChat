import React from "react";
import {FaUserFriends } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between bg-slate-800 py-5 rounded-md px-5">
        {/* photo */}
        <div className="flex items-center gap-x-5">
          <div className="h-14 w-14 rounded-full bg-orange-400 overflow-hidden"></div>
         
         
          <div>
             <span className="font-roboto font-bold text-white">Sunny</span>  
             </div>

        </div>

        {/* link */}
        <div className="flex items-center gap-x-5">
       <Link to='/' className="w-14 h-14 rounded-full bg-sky-400 flex items-center justify-center">
       <FaUserFriends className="text-3xl  text-white  " />
       </Link>

      <Link to='/message' className="w-14 h-14 rounded-full bg-sky-400 flex items-center justify-center">

      <FaFacebookMessenger className="text-3xl  text-white" />
      </Link>
        </div>

        {/* logout */}
        <div>
          <button className="bg-sky-400  px-4 py-4 rounded-xl w-[100px] font-roboto text-white text-xl">Logout</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
