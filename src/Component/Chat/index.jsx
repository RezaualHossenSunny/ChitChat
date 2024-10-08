import React from 'react'
import { BsEmojiSmile } from "react-icons/bs";
import { RiGalleryLine } from "react-icons/ri";
const Chat = () => {
  return (
    <>
    <div className='w-full bg-white  mt-4'>
        <div className=' bg-slate-800 py-4 px-3  '>
            <div className='flex items-center gap-x-3'>
                <div className='w-14 h-14 bg-orange-500 rounded-full'>

                </div>
                <p className='font-roboto text-lg text-white '>Rezaul Hossen</p>
                
            </div>

      </div>

      <div className='h-[415px] px-3 py-2'>hh </div>

    <div className='px-3 bg-slate-200  py-2'>
        <div className='bg-white w-[532px] rounded-md  mx-auto py-3 flex items-center justify-center px-3 gap-x-4'>
            <div className='flex gap-x-3 text-2xl items-center w-[15%] cursor-pointer '>
            <BsEmojiSmile />
            <RiGalleryLine />
            </div>
            <input className='w-[60%] outline-none' type="text"  placeholder='type something'/>
            <button className=' w-[15%] py-2 px-4 text-center bg-sky-400 text-white rounded-md'>send</button>

        </div>

    </div>


      
      

    </div>
    </>
  )
}

export default Chat