import React, { useRef, useState } from "react";
import { ImCross } from "react-icons/im";
import { TbCloudUpload } from "react-icons/tb";
import Imgcroper from "../ImageCroper";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadString,
  
} from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, updateProfile } from "firebase/auth";
import { logedInuse } from "../../Feture/Slices/Loginslice";

const Model = ({ Setshow }) => {

  const auth = getAuth();
const dispatch = useDispatch();
  const user = useSelector((user) => user.login.login);
  const storage = getStorage();
  const storageRef = ref(storage, user.uid);

 
  const [image, setImage] = useState();
  const [cropData, setCropData] = useState("#");
  const cropperRef = useRef();

  const fileref = useRef(null);

  const handleChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
      const message4 = cropperRef.current?.cropper
        .getCroppedCanvas()
        .toDataURL();
      uploadString(storageRef, message4, "data_url").then((snapshot) => {
        getDownloadURL(storageRef).then((downloadURL) => {
          updateProfile(auth.currentUser, {
          
            photoURL:downloadURL ,
          }).then(()=>{
            dispatch(logedInuse({... user,photoURL:downloadURL}))
            localStorage.setItem('user', JSON.stringify({... user,photoURL:downloadURL}))
            
          })
        });
      });
    }
  };

  return (
    <>
      <div className="fixed w-full h-screen top-0 left-0 bg-[#2e2e2ef0] flex items-center justify-center">
        <div className="w-[30%] rounded-md bg-white p-5">
          <div className=" relative">
            <h1 className="font-roboto text-black text-center text-xl">
              Upload Photo
            </h1>
            <div
              className="absolute  top-1 right-0 cursor-pointer"
              onClick={() => Setshow(false)}
            >
              <ImCross />
            </div>
          </div>

          <div className="w-full  border border-slate-500 rounded-md h-48 mt-5 p-5 bg-slate-100 cursor-pointer font-bold text-lg">
            <div
              className="flex items-center justify-center "
              onClick={() => fileref.current.click()}
            >
              <div>
                <div className="flex justify-center mt-12 text-center">
                  <TbCloudUpload />
                </div>
                <h4>Upload Your Profile</h4>
                <input
                  type="file"
                  ref={fileref}
                  hidden
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        {image && (
          <Imgcroper
            setImage={setImage}
            cropperRef={cropperRef}
            image={image}
            getCropData={getCropData}
          />
        )}
      </div>
    </>
  );
};

export default Model;
