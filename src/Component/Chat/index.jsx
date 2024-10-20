import React, { useEffect, useState, useCallback } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { RiGalleryLine } from "react-icons/ri";
import avatar from "../../assets/Avatar.png";
import { useSelector } from "react-redux";
import { getDatabase, onValue, push, ref, set } from "firebase/database";

const Chat = () => {
  const user = useSelector((state) => state.login.login);
  const singleFriend = useSelector((single) => single.active.active);
  const [message, setMessage] = useState('');
  const [allMessages, setAllMessages] = useState([]);
  const db = getDatabase();

  const handleSendMessage = useCallback(async () => {
    if (singleFriend?.status === 'Single' && message.trim()) {
      const timestamp = new Date().toLocaleString();
      try {
        await set(push(ref(db, "singlemessage")), {
          whoSendName: user.displayName,
          whoSendId: user.uid,
          whoReceiverName: singleFriend.name,
          whoReceiverId: singleFriend.id,
          message,
          date: timestamp,
        });
        setMessage("");
      } catch (error) {
        console.error("Error sending message: ", error);
      }
    }
  }, [singleFriend, message, user, db]);

  useEffect(() => {
    const unsubscribe = onValue(ref(db, 'singlemessage'), (snapshot) => {
      const singleMsg = [];
      snapshot.forEach((item) => {
        const messageData = item.val();
        if ((user.uid === messageData.whoSendId && messageData.whoReceiverId === singleFriend.id) ||
            (user.uid === messageData.whoReceiverId && messageData.whoSendId === singleFriend.id)) {
          singleMsg.push(messageData);
        }
      });
      setAllMessages(singleMsg);
    });

    return () => unsubscribe(); // Clean up listener on unmount
  }, [singleFriend?.id, user.uid, db]);

  return (
    <div className="w-full bg-white mt-4">
      <div className="bg-slate-800 py-4 px-3">
        <div className="flex items-center gap-x-3">
          <div className="w-14 h-14 bg-orange-500 rounded-full">
            <img className="w-full h-full object-cover rounded-full" src={singleFriend.profile || avatar} alt="Profile" />
          </div>
          <p className="font-roboto text-lg text-white">{singleFriend.name || 'Please select your friend'}</p>
        </div>
      </div>

      <div className="h-[415px] px-3 py-2 overflow-y-auto">
        {singleFriend?.status === "Single" && allMessages.map((item, i) => (
          <div key={i} className={item.whoSendId === user.uid ? "w-[50%] ml-auto" : "w-[50%] mr-auto my-4"}>
            <p className={`text-white text-lg font-serif ${item.whoSendId === user.uid ? 'bg-sky-600' : 'bg-slate-600'} p-3 rounded-lg`}>
              {item.message}
            </p>
            
          </div>
        ))}
      </div>

      <div className="px-3 bg-slate-200 py-2">
        <div className="bg-white w-[532px] rounded-md mx-auto py-3 flex items-center justify-center px-3 gap-x-4">
          <div className="flex gap-x-3 text-2xl items-center w-[15%] cursor-pointer">
            <BsEmojiSmile />
            <RiGalleryLine />
          </div>
          <input
            className="w-[60%] outline-none"
            type="text"
            placeholder="Type something"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={handleSendMessage} className="w-[15%] py-2 px-4 text-center bg-sky-400 text-white rounded-md">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
