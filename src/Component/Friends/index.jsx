import { getDatabase, onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import avatart from "../../assets/Avatar.png";
import { ActiveSingle } from "../../Feture/Slices/ActiveSingleSlice";
const Friend = () => {
  const user = useSelector((state) => state.login.login);
  const [friend, Setfriend] = useState([]);
  const locataion = useLocation();
  const navagiate = useNavigate();
  const db = getDatabase();
  const dispatch = useDispatch();
  useEffect(() => {
    const starCountRef = ref(db, "friends/");
    onValue(starCountRef, (snapshot) => {
      let friendArr = [];

      snapshot.forEach((item) => {
        if (
          user.uid === item.val().senderId ||
          user.uid === item.val().receiverId
        ) {
          friendArr.push({ ...item.val(), id: item.key });
        }
      });

      Setfriend(friendArr);
    });
  }, [db, user.uid]);

  //  single chat

  const handleChat = (data) => {
    if (user.uid === data.receiverId) {
      dispatch(ActiveSingle({
        status: "Single",
        id:data.senderId,
        name: data.senderName,
        profie:data.senderProfile
      }));
      localStorage.setItem('active', JSON.stringify({
        status: "Single",
        id:data.senderId,
        name: data.senderName,
        profie:data.senderProfile
      }))
    } else {
      dispatch(ActiveSingle({
        status: "Single",
        id:data.receiverId,
        name: data.receiverName,
        profie:data.receiverProfile
      }));

      localStorage.setItem('active', JSON.stringify({
        status: "Single",
        id:data.receiverId,
        name: data.receiverName,
        profie:data.receiverProfile
      }))
    }
  };

  return (
    <>
      <div className="bg-white shadow-md p-4  h-[600px]  overflow-auto">
        <h1 className="font-roboto text-xl  py-4 font-semibold">Friends</h1>

        {friend?.map((item) => (
          <div
            className="flex items-center justify-between mt-4 hover:bg-orange-300  hover:rounded-md p-1  cursor-pointer"
            key={item.id}
            onClick={() => handleChat(item)}
          >
            <div className="flex items-center gap-x-2">
              <div className="w-10 h-10 bg-gray-400 rounded-full overflow-hidden">
                {user.uid === item.receiverId ? (
                  <img
                    src={item.senderProfile || avatart}
                    alt={item.username}
                  />
                ) : (
                  <img
                    src={item.receiverProfile || avatart}
                    alt={item.username}
                  />
                )}
              </div>
              <p className="font-roboto text-lg">
                {user.uid === item.senderId
                  ? item.receiverName
                  : item.senderName}
              </p>
            </div>
            <div className="">
              {locataion.pathname == "/" && (
                <button
                  onClick={() => {
                    navagiate("/message");
                  }}
                  className="py-3 px-5 rounded-xl w-24 bg-sky-500 font-roboto text-white font-medium"
                >
                  Message
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Friend;
