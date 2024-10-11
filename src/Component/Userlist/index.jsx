import { getDatabase, onValue, ref, set } from "firebase/database";
import { getDownloadURL, getStorage, ref as Ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { IoMdPersonAdd } from "react-icons/io";
import { useSelector } from "react-redux";
import avatart from '../../assets/Avatar.png'
const Userlist = () => {
  const user = useSelector((user) => user.login.login);
  const [users,Setusers]=useState([]);


  const db = getDatabase();

  const storage = getStorage();







  useEffect(()=>{
    const starCountRef = ref(db, 'users/');
    onValue(starCountRef, (snapshot) => {
   const users =[]
   snapshot.forEach((userlist)=>{
    if(user.uid !== userlist.key){
      getDownloadURL(Ref(storage, userlist.key))
      .then((downloadURL) => {

        users.push({
          ... userlist.val(),
          id: userlist.key,

          photoURL:downloadURL
        })

      }).catch((error)=>{
        users.push({
          ... userlist.val(),
          id: userlist.key,

          photoURL:null
        })
      }).then(()=>{
       Setusers([... users])
      })
    }
   })
     
    });
    
    
  },[db,user.uid, storage])

// send friend req

const handlefriendreq =(data)=>{
set(ref(db,"friendrequest  "),{
  senderName:user.displayName,
  senderId :user.uid,
  senderProfile: user.photoURL ?? "../../assets/Avatar.png",
  receiverName:data.username,
  receiverId:data.id,
  receiverProfile: data.photoURL ?? "../../assets/Avatar.png"
  

  
})


}

  return (
    <>
      <div className="p-4  h-[600px]  overflow-auto">
        <h1 className="font-roboto text-xl  py-4 font-semibold ">All Users</h1>

        {
          users.map((item)=>(
            <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-x-2">
              <div className="w-12 h-12 bg-slate-500 rounded-full overflow-hidden">{
                <img src={item.photoURL || avatart}/>
                }</div>
              <h3 className="font-roboto text-lg">{item.username} </h3>
            </div>
            <div>
            <IoMdPersonAdd className="text-2xl cursor-pointer"  onClick={()=> handlefriendreq(item)}/>
            </div>
          </div>
          ))
        }
     
        

 


        
      </div>
    </>
  );
};

export default Userlist;
