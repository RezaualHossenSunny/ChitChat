import { getDatabase, onValue, push, ref, set } from "firebase/database";
import {
  getDownloadURL,
  getStorage,
  ref as storageRef,
} from "firebase/storage";
import React, { useEffect, useState } from "react";
import { IoMdPersonAdd } from "react-icons/io";
import { useSelector } from "react-redux";
import avatart from "../../assets/Avatar.png";

const Userlist = () => {
  const user = useSelector((state) => state.login.login);
  const [users, setUsers] = useState([]);
  const [friendReq, Setfriendreq] = useState([]);
  const [friendReqcancel, Setfriendreqcancel] = useState([]);
  const db = getDatabase();
  const storage = getStorage();

  useEffect(() => {
    const starCountRef = ref(db, "users/");
    const unsubscribe = onValue(starCountRef, async (snapshot) => {
      const usersArray = [];
      const userPromises = [];

      snapshot.forEach((userlist) => {
        if (user.uid !== userlist.key) {
          const userPromise = getDownloadURL(storageRef(storage, userlist.key))
            .then((downloadURL) => ({
              ...userlist.val(),
              id: userlist.key,
              photoURL: downloadURL,
            }))
            .catch(() => ({
              ...userlist.val(),
              id: userlist.key,
              photoURL: null,
            }));

          userPromises.push(userPromise);
        }
      });

      const resolvedUsers = await Promise.all(userPromises);
      setUsers(resolvedUsers);
    });

    return () => unsubscribe(); // Cleanup subscription
  }, [db, user.uid, storage]);

  const handleFriendReq = (data) => {
    set(push(ref(db, "friendrequest")), {
      senderName: user.displayName,
      senderId: user.uid,
      senderProfile: user.photoURL ?? avatart,
      receiverName: data.username,
      receiverId: data.id,
      receiverProfile: data.photoURL ?? avatart,
    });
  };

  // show
  useEffect(() => {
    const starCountRef = ref(db, "friendrequest/");
    const unsubscribe = onValue(starCountRef, (snapshot) => {
      const reqArr = [];
      snapshot.forEach((item) => {
        reqArr.push(item.val().receiverId + item.val().senderId);
      });

      Setfriendreq(reqArr);
    });

    return () => unsubscribe(); // Cleanup subscription
  }, [db]);

  // cancell

  // useEffect(() => {
  //   const starCountRef = ref(db, "friendrequest/");
  //   const unsubscribe = onValue(starCountRef, (snapshot) => {
  //     const cancelReq = [];
  //     snapshot.forEach((item) => {
  //       reqArr.push({... item.val() , id:item.key});
  //     });

  //     Setfriendreqcancel(cancelReq);
  //   });

  //   return () => unsubscribe(); // Cleanup subscription
  // }, [db]);

  const handlecancelreq = (data)=>{
    console.log(data)
    
  }

  return (
    <div className="p-4 h-[600px] overflow-auto">
      <h1 className="font-roboto text-xl py-4 font-semibold">All Users</h1>
      {users.map((item) => (
        <div className="flex items-center justify-between mt-4" key={item.id}>
          <div className="flex items-center gap-x-2">
            <div className="w-12 h-12 bg-slate-500 rounded-full overflow-hidden">
              <img src={item.photoURL || avatart} alt={item.username} />
            </div>
            <h3 className="font-roboto text-lg">{item.username}</h3>
          </div>
          {friendReq.includes(item.id + user.uid) ||
          friendReq.includes(user.uid) ? (
            <button className="py-3 px-3 w-[80px] bg-red-400 font-bold text-white font-roboto rounded-md " onClick={()=> handlecancelreq(item)}>
              Cancel
            </button>
          ) : (
            <div onClick={() => handleFriendReq(item)}>
              <IoMdPersonAdd className="text-2xl cursor-pointer" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Userlist;
