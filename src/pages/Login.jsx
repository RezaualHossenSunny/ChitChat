import Lottie from 'lottie-react'
import React from 'react'
import { toast, ToastContainer } from 'react-toastify'
import Logincomp from '../Component/Login'
import loginani from '../animation/login.json'
const Login = () => {
  return (
   <>
   <ToastContainer />
      <div className="w-full h-screen flex items-center justify-center">
        <div className=" w-full md:w-2/4 bg-white shadow-md rounded-md  p-4 flex items-center gap-x-10 justify-between">
          {/* img */}
          <div className=" hidden md:block  w-[45%]">
            <Lottie animationData={loginani} loop={true} />
          </div>

          {/* rgi */}

          <div className=" w-full md:w-[45%]">
            <Logincomp  toast={toast}/>
          </div>
        </div>
      </div>
   </>
  )
}

export default Login