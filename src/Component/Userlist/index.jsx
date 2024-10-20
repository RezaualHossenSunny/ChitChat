import { getDatabase, onValue, push, ref, remove, set } from "firebase/database";
import { getDownloadURL, getStorage, ref as storageRef } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { IoMdPersonAdd } from "react-icons/io";
import { useSelector } from "react-redux";
import avatart from "../../assets/Avatar.png";

const Userlist = () => {
  const user = useSelector((state) => state.login.login);
  const [users, setUsers] = useState([]);
  const [friendReq, setFriendReq] = useState([]);
  const [friendReqCancel, setFriendReqCancel] = useState([]);
  const [loading, setLoading] = useState(true);
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
      setLoading(false);
    });

    return () => unsubscribe();
  }, [db, user.uid, storage]);

  const handleFriendReq = ({ username, id, photoURL }) => {
    set(push(ref(db, "friendrequest")), {
      senderName: user.displayName,
      senderId: user.uid,
      senderProfile: user.photoURL ?? avatart,
      receiverName: username,
      receiverId: id,
      receiverProfile: photoURL ?? avatart,
    });
  };

  useEffect(() => {
    const starCountRef = ref(db, "friendrequest/");
    const unsubscribe = onValue(starCountRef, (snapshot) => {
      const reqArr = [];
      const cancelReqArr = [];
      
      snapshot.forEach((item) => {
        const { receiverId, senderId } = item.val();
        reqArr.push(receiverId + senderId);
        reqArr.push(senderId + receiverId); // Include the reverse for bi-directional requests
        cancelReqArr.push({ ...item.val(), id: item.key });
      });
  
      setFriendReq(reqArr);
      setFriendReqCancel(cancelReqArr);
    });
  
    return () => unsubscribe();
  }, [db]);
  

  const handleCancelReq = (data) => {
    const reqCancel = friendReqCancel.find(
      (req) => req.receiverId === data && req.senderId === user.uid
    );

    if (reqCancel) {
      remove(ref(db, 'friendrequest/' + reqCancel.id));
    }
  };

  if (loading) {
    return <div className="text-orange-400">Loading users...</div>; // Add a loading state
  }

  return (
    <div className="p-4  h-[500px] md:h-[600px] overflow-auto">
      <h1 className="font-roboto text-xl py-4 font-semibold">All Users</h1>
      {users.map((item) => (
        <div className="flex items-center justify-between mt-4 " key={item.id}>
          <div className="flex items-center gap-x-2">
            <div className="w-12 h-12 bg-slate-500 rounded-full overflow-hidden">
              <img src={item.photoURL || avatart} alt={item.username} />
            </div>
            <h3 className="font-roboto text-lg">{item.username}</h3>
          </div>
          {friendReq.includes(item.id + user.uid) ||
          friendReq.includes(user.uid) ? (
            <button
              className="py-3 px-3 w-[80px] bg-red-400 font-bold text-white font-roboto rounded-md"
              onClick={() => handleCancelReq(item.id)}
            >
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
