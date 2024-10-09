import React from "react";
import { ImCross } from "react-icons/im";

const Imgcroper = () => {
  return (
    <>
      <div className="fixed w-full h-screen top-0 left-0  flex items-center justify-center">
        <div className="w-[30%] rounded-md bg-white p-5">
          <div className=" relative">
            <h1 className="font-roboto text-black text-center text-xl">
              Upload Photo
            </h1>
            <div
              className="absolute  top-1 right-0 cursor-pointer"
              
            >
              <ImCross />
            </div>
          </div>
          

     </div>
      </div>
    </>
  );
};

export default Imgcroper;
