import React from "react";
import { IoMdPersonAdd } from "react-icons/io";
const Userlist = () => {
  return (
    <>
      <div className="p-4  h-[400px]  overflow-auto">
        <h1 className="font-roboto text-xl  py-4 font-semibold ">All Users</h1>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-x-2">
            <div className="w-12 h-12 bg-slate-500 rounded-full overflow-hidden"></div>
            <h3 className="font-roboto text-lg">Sunny </h3>
          </div>
          <div>
          <IoMdPersonAdd className="text-2xl cursor-pointer" />
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-x-2">
            <div className="w-12 h-12 bg-slate-500 rounded-full overflow-hidden"></div>
            <h3 className="font-roboto text-lg">Sunny </h3>
          </div>
          <div>
          <IoMdPersonAdd className="text-2xl cursor-pointer" />
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-x-2">
            <div className="w-12 h-12 bg-slate-500 rounded-full overflow-hidden"></div>
            <h3 className="font-roboto text-lg">Sunny </h3>
          </div>
          <div>
          <IoMdPersonAdd className="text-2xl cursor-pointer" />
          </div>
        </div>
        


        
      </div>
    </>
  );
};

export default Userlist;
