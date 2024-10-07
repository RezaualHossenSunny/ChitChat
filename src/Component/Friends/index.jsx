import React from "react";

const Friend = () => {
  return (
    <>
      <div className="bg-white shadow-md p-4 ">
        <h1 className="font-roboto text-xl  py-4 font-semibold">Friends</h1>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-x-2">
            <div className="w-10 h-10 bg-gray-400 rounded-full overflow-hidden"></div>
            <p className="font-roboto text-lg">RH Sunny</p>
          </div>
          <div className="flex gap-x-2">
            <button className="py-3 px-5 rounded-xl w-24 bg-sky-500 font-roboto text-white font-medium">
              Message
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-x-2">
            <div className="w-10 h-10 bg-gray-400 rounded-full overflow-hidden"></div>
            <p className="font-roboto text-lg">RH Sunny</p>
          </div>
          <div className="flex gap-x-2">
            <button className="py-3 px-5 rounded-xl w-24 bg-sky-500 font-roboto text-white font-medium">
              Message
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-x-2">
            <div className="w-10 h-10 bg-gray-400 rounded-full overflow-hidden"></div>
            <p className="font-roboto text-lg">RH Sunny</p>
          </div>
          <div className="flex gap-x-2">
            <button className="py-3 px-5 rounded-xl w-24 bg-sky-500 font-roboto text-white font-medium">
              Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Friend;
