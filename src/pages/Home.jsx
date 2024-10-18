import React from "react";
import Logeduserourter from "../PrivateRout/Logeduserourter";
import Navbar from "../Component/Navbar/Navbar";
import Userlist from "../Component/Userlist";
import Friendreq from "../Component/Friendrequests";
import Friend from "../Component/Friends";

const Home = () => {
  return (
    <>
      <div className=" mt-[100px]   grid   gird-cols-1 md:grid-cols-[1.5fr,4fr] px-5">
       <div className=" w-full ">
       <Userlist/>
       </div>


       <div className="  h-[100px] md:h-full w-full   grid grid-cols-1   md:grid-cols-2 gap-x-9">
        <div>
          <Friendreq/>
        </div>
        <div>
          <Friend/> 
          </div>

       </div>
     
      </div>

   
    </>
  
  );
};

export default Home;
