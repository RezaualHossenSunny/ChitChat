import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
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
       <div className="w-14 h-14 rounded-full bg-sky-400 flex items-center justify-center">
       <FaUserFriends className="text-3xl  text-white  " />
       </div>

      <div className="w-14 h-14 rounded-full bg-sky-400 flex items-center justify-center">

      <IoMdNotifications className="text-3xl  text-white" />
      </div>
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
