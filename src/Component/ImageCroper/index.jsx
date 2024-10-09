import React from "react";
import { Cropper } from "react-cropper";
import { ImCross } from "react-icons/im";

const Imgcroper = ({setImage,cropperRef,image}) => {
  return (
    <>
      <div className="fixed w-full h-screen top-0 left-0  flex items-center justify-center">
        <div className="w-[30%] rounded-md bg-white p-5">
          <div className=" relative">
            <h1 className="font-roboto text-black text-center text-xl">
              Upload Photo
            </h1>
            <div
              className="absolute  top-1 right-0 cursor-pointer"
              onClick={()=> setImage ()}
            >
              <ImCross />
            </div>
          </div>

          <div className="w-20 h-20 rounded-full mx-auto overflow-hidden">
        <div
            className="img-preview"
            style={{ width: "100%", float: "left", height: "300px" }}
          />

          </div>



          <div>
          <Cropper
          ref={cropperRef}
          style={{ height: 400, width: "100%" }}
          zoomTo={0.5}
          initialAspectRatio={1}
          preview=".img-preview"
          src={image}
          viewMode={1}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          background={false}
          responsive={true}
          autoCropArea={1}
          checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
          guides={true}
        />
          </div>


     </div>
      </div>
    </>
  );
};

export default Imgcroper;
