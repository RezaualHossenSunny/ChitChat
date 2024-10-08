import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { logedout } from "../../Feture/Slices/Loginslice";
import { CiCamera } from "react-icons/ci";
const Navbar = () => {
  const auth = getAuth();
  const location = useLocation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlesignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
        localStorage.removeItem("user");
        dispatch(logedout());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className=" flex items-center justify-between bg-slate-800 py-5 rounded-md px-5">
        {/* photo */}
        <div className="flex items-center gap-x-5">
          <div className="relative">
            <div className=" h-14  w-9 md:w-14 rounded-full bg-orange-400 overflow-hidden"></div>
            <div className="absolute bottom-0 right-0 text-2xl  bg-white h-7 w-7 rounded-full flex items-center justify-center">
              <CiCamera />
            </div>
          </div>

          <div>
            <span className=" font-serif md:font-roboto  md:font-bold text-white">
              Sunny
            </span>
          </div>
        </div>

        {/* link */}
        <div className="flex items-center  gap-x-1 md:gap-x-5">
          <Link
            to="/"
            className={`${
              location.pathname == "/"
                ? "text-salte-500 bg-sky-400"
                : "text-white "
            } w-14 h-14 rounded-full  flex items-center justify-center`}
          >
            <FaUserFriends className=" text-xl md:text-3xl    " />
          </Link>

          <Link
            to="/message"
            className={`${
              location.pathname == "/message"
                ? "text-salte-500 bg-sky-400"
                : "text-white "
            } w-14 h-14 rounded-full  flex items-center justify-center`}
          >
            <FaFacebookMessenger className=" text-xl md:text-3xl  text-white" />
          </Link>
        </div>

        {/* logout */}
        <div>
          <button
            onClick={handlesignout}
            className="bg-sky-400  px-3 md:px-4  py-3 md:py-4 rounded-xl  w-[80px] md:w-[100px] font-roboto text-white text-lg md:text-xl"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
