import React from 'react'

const Friendreq = () => {
  return (
    <>
    <div className='bg-white shadow-md p-4 h-[400px]  overflow-auto '>
        <h1 className='font-roboto text-xl  py-4 font-semibold'>Friend requests</h1>

        <div className='flex items-center justify-between mt-4'>

            <div className='flex items-center gap-x-2'>
                <div className='w-10 h-10 bg-orange-400 rounded-full overflow-hidden'></div>
                <p className="font-roboto text-lg">RH Sunny</p>

            </div>
            <div className='flex gap-x-2'>
                <button className='py-3 px-5 rounded-xl w-24 bg-sky-400 font-roboto text-white font-medium'>Accept</button>
                <button className='py-3 px-5 rounded-xl w-24 bg-red-400 font-roboto text-white font-medium'>Reject</button>
                

            </div>

        </div>

        <div className='flex items-center justify-between mt-4'>

            <div className='flex items-center gap-x-2'>
                <div className='w-10 h-10 bg-orange-400 rounded-full overflow-hidden'></div>
                <p className="font-roboto text-lg">RH Sunny</p>

            </div>
            <div className='flex gap-x-2'>
                <button className='py-3 px-5 rounded-xl w-24 bg-sky-400 font-roboto text-white font-medium'>Accept</button>
                <button className='py-3 px-5 rounded-xl w-24 bg-red-400 font-roboto text-white font-medium'>Reject</button>
                

            </div>

        </div>

        <div className='flex items-center justify-between mt-4'>

            <div className='flex items-center gap-x-2'>
                <div className='w-10 h-10 bg-orange-400 rounded-full overflow-hidden'></div>
                <p className="font-roboto text-lg">RH Sunny</p>

            </div>
            <div className='flex gap-x-2'>
                <button className='py-3 px-5 rounded-xl w-24 bg-sky-400 font-roboto text-white font-medium'>Accept</button>
                <button className='py-3 px-5 rounded-xl w-24 bg-red-400 font-roboto text-white font-medium'>Reject</button>
                

            </div>

        </div>
    </div>
    </>
  )
}

export default Friendreq