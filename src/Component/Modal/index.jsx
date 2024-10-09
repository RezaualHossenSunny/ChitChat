import React, { useRef, useState } from "react";
import { ImCross } from "react-icons/im";
import { TbCloudUpload } from "react-icons/tb";
import Imgcroper from "../ImageCroper";
const Model = ({Setshow}) => {
  const [image, setImage] = useState();
  const [cropData, setCropData] = useState("#");
  const cropperRef = useRef();

 const fileref = useRef(null) 
 
 
const handleChange =(e)=>{
  e.preventDefault();
  let files;
  if (e.dataTransfer) {
    files = e.dataTransfer.files;
  } else if (e.target) {
    files = e.target.files;
  }

  const reader = new FileReader();
  reader.onload = () => {
    setImage(reader.result)
 
    
  };
  reader.readAsDataURL(files[0]);




}


  return (
    <>
      <div className="fixed w-full h-screen top-0 left-0 bg-[#2e2e2ef0] flex items-center justify-center">
        <div className="w-[30%] rounded-md bg-white p-5">
          <div className=" relative">
            <h1 className="font-roboto text-black text-center text-xl">
              Upload Photo
            </h1>
            <div className="absolute  top-1 right-0 cursor-pointer" onClick={()=> Setshow(false)}  >
            <ImCross />
            </div>
          </div>

          <div className="w-full  border border-slate-500 rounded-md h-48 mt-5 p-5 bg-slate-100 cursor-pointer font-bold text-lg">
            <div className="flex items-center justify-center " onClick={()=> fileref.current.click()}  >
               <div>
               <div className="flex justify-center mt-12 text-center">
                <TbCloudUpload />
                </div>
                <h4>Upload Your Profile</h4>
                <input type="file" ref={fileref} hidden onChange={handleChange} />
               </div>

            </div>

          </div>

       
        </div>
        {
          image && 
          <Imgcroper setImage={setImage} cropperRef={cropperRef} image={image}/>
          }

    
      </div>
    </>
  );
};

export default Model;
