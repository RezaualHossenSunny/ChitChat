import { useFormik } from "formik";
import React, { useState } from "react";
import { login } from "../../Validate/Validation";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { PropagateLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { logedInuse } from "../../Feture/Slices/Loginslice";
import { Link, useNavigate } from "react-router-dom";


const Logincomp = ({ toast }) => {
  const auth = getAuth();
  const [loding, Setloding] = useState(false);
  const dispatch = useDispatch();
  const navigate =useNavigate()
  const initialValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: () => {
      sinionuser();
    },
    validationSchema: login,
  });

  const sinionuser = ()=>{
    Setloding(true)

    signInWithEmailAndPassword(auth, formik.values.email, formik.values.password)
    .then(({user}) => {
    if(user.emailVerified == true){
      Setloding(false)
    dispatch(logedInuse(user));
    localStorage.setItem("user", JSON.stringify(user));
    navigate('/')
    
    }else{
      toast.error("please verify your email", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,

        theme: "colored",
        
        });
        Setloding(false)
    }
     
    })
    .catch((error) => {
      if (error.message.includes("auth/invalid-credential")) {
        toast.error("emali or pasword incoreed ", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        Setloding(false);
      }
     
    });
  }
  return (
    <>
      <div>
        <h2 className="font-roboto mb-3 font-bold text-2xl">
          LogIn To Your Account ChitChat
        </h2>
        <form onSubmit={formik.handleSubmit}>
          <input
            placeholder="Enter your email"
            className="py-2 px-3 w-full border border-2 border-gray-400 outline-none rounded-lg mb-3"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            type="email"
          />
          {formik.errors.email && formik.touched.email && (
            <p className="font-roboto text-red-500">{formik.errors.email}</p>
          )}

          <input
            placeholder="Enter your password"
            className="py-2 px-3 w-full border border-2 border-gray-400 outline-none rounded-lg mb-3"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            type="password"
          />
          {formik.errors.password && formik.touched.password && (
            <p className="font-roboto text-red-500 mb-2">
              {formik.errors.password}
            </p>
          )}

          <button
            disabled={loding}
            className="w-full py-3 bg-slate-950 text-white rounded-xl"
            type="submit"
          >
            {loding ? <PropagateLoader color="#ffff" size={5} /> : "Sign In"}
          </button>
        </form>
        <p className="mt-4 font-roboto font-bold text-base text-gray-400">
          Don’t have an account please <Link to="/regi" className="hover:text-orange-400 text-xl underline">sign up</Link>
        </p>
      </div>
    </>
  );
};

export default Logincomp;
