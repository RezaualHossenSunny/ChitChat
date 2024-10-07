import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function Rotlayout() {
  return (
  <>
      <div className="relative w-full h-screen">
      <div className="h-[400px] w-full bg-[#4A81D3]">

        <div className="w-3/4 bg-white shadow-md rounded-md absolute  top-2/4 left-1/2 -translate-y-2/4 -translate-x-1/2 h-[500px] ">

        <Navbar/>
        <Outlet/>

      
         
        </div>
      </div>
    </div>
  </>
  )
}

export default Rotlayout