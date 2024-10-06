import React from 'react'
import Regicomp from '../Component/Registrasion/Index'

const Registration = () => {
  return (
    <>
    <div className="w-full h-screen flex items-center justify-center">
        <div className="w-2/4 bg-white shadow-md rounded-md  p-4 flex items-center gap-x-10 justify-between">

        {/* img */}
        <div className=" hidden md:block  w-[45%]">
            <img src="https://t3.ftcdn.net/jpg/02/36/49/20/360_F_236492084_U8ueetasjJBnQcB6QlnDCHlVjVRObQgw.jpg" alt="" />
        </div>


        {/* rgi */}

        <div  className="w-[45%]">
            <Regicomp/>
        </div>

        </div>

    </div>
    </>
  )
}

export default Registration