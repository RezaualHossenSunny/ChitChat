import React from "react";
import Logeduserourter from "../PrivateRout/Logeduserourter";
import Navbar from "../Component/Navbar/Navbar";
import Userlist from "../Component/Userlist";

const Home = () => {
  return (
    <>
      <div className="grid  grid-cols-[1.5fr,4fr] px-5">
       <div className=" w-full ">
       <Userlist/>
       </div>


       <div className="bg-orange-500 h-full w-full ">f</div>
     
      </div>

   
    </>
  
  );
};

export default Home;
