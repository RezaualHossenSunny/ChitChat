import React from "react";
import Regicomp from "../Component/Registrasion/Index";
import { ToastContainer, toast } from "react-toastify";
import Lottie from "lottie-react";
import regiani from '../animation/regi.ani.json'
const Registration = () => {
  return (
    <>
      <ToastContainer />
      <div className="w-full h-screen flex items-center justify-center">
        <div className=" w-full md:w-2/4 bg-white shadow-md rounded-md  p-4 flex items-center gap-x-10 justify-between">
          {/* img */}
          <div className=" hidden md:block  w-[45%]">
            <Lottie animationData={regiani} loop={true} />
          </div>

          {/* rgi */}

          <div className=" w-full md:w-[45%]">
            <Regicomp toast={toast} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
