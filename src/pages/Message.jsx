import React from 'react'
import Friend from '../Component/Friends'
import Chat from '../Component/Chat'


const Message = () => {
  return (
   <>
     <div className="    grid grid-cols-[1.5fr,4fr] px-5">
       <div className=" w-full ">
       <Friend/>
       </div>


       <div className="  ">
       
        <Chat/>

       </div>
     
      </div>
   </>
  )
}

export default Message