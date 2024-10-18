import { getDatabase, onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import avatart from "../../assets/Avatar.png";
const Friendreq = () => {
  const user = useSelector((state) => state.login.login);
  const [friendReq, setFriendReq] = useState([]);
  const db = getDatabase();
  useEffect(()=>{


    const starCountRef = ref(db, 'friendrequest/');
    onValue(starCountRef, (snapshot) => {

      let friendreq=[]

      snapshot.forEach((item)=>{
        if(user.uid === item.val().receiverId) {
          friendreq.push({...item.val(), id:item.key})
        }
      })
      setFriendReq(friendreq)
    });
  },[db,user.uid])
console.log(friendReq);

  return (
    <>
    <div className='bg-white shadow-md p-4  md:h-[600px]  overflow-auto  ' >
        <h1 className='font-roboto text-xl  py-4 font-semibold'>Friend requests</h1>

      

        {
          friendReq ?.map((item)=>(

            <div className='flex items-center justify-between mt-4' key={item.id}>

            <div className='flex items-center gap-x-2'>
                <div className='w-10 h-10 bg-orange-400 rounded-full overflow-hidden'>

                <img src={item.senderProfile || avatart} alt={item.username} />

                </div>
                <p className="font-roboto text-lg">{item.senderName} </p>

            </div>
            <div className='flex gap-x-2'>
                <button className='py-3 px-5 rounded-xl w-24 bg-sky-400 font-roboto text-white font-medium'>Accept</button>
                <button className='py-3 px-5 rounded-xl w-24 bg-red-400 font-roboto text-white font-medium'>Reject</button>
                

            </div>

        </div>
          ))
        }

     

      
    </div>
    </>
  )
}

export default Friendreq