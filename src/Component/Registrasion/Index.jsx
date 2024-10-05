import { useFormik } from "formik";
import React from "react";
import { signUp } from "../../Validate/Validation";



const Regicomp = () => {

  const initialValues = {
    fullName: "",
    email: "",
    password: "",
  };

  // formikuse

  const formik = useFormik({
    initialValues,
    onSubmit: console.log("submited"),
    validationSchema: signUp
  
 
  });

  console.log("nfffjfjfjfjf", formik);

  return (
    <>
      <div>
        <h2 className="font-roboto mb-3 font-bold text-2xl ">
          Wellcome ChitChat
        </h2>
        <from onSubmit={formik.handleSubmit}>
          <input
            placeholder="enter your name"
            className="py-2 px-3 w-full border border-2 border-gray-400  outline-none  rounded-lg mb-3"
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            type="text"
          />
        
        {formik.errors.fullName && <p className="font-roboto text-red-500  " >{formik.errors.fullName}</p>}

          <input
            placeholder="enter your email"
            className="py-2 px-3 w-full border border-2 border-gray-400  outline-none  rounded-lg mb-3"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            type="email"
          />
        {formik.errors.email && <p className="font-roboto text-red-500 ">{formik.errors.email}</p>}
          <input
            placeholder="enter your password"
            className="py-2 px-3 w-full border border-2 border-gray-400  outline-none  rounded-lg mb-3"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            type="password"
          />
         {formik.errors.password && <p className="font-roboto text-red-500  mb-2">{formik.errors.password}</p>}
          <button className="w-full py-3 bg-slate-950 text-white rounded-xl ">
            Sign Up
          </button>
        </from>
        <p className="mt-4 font-roboto font-bold text-base text-gray-400 ">
          Already have an account please sign in
        </p>
      </div>
    </>
  );
};

export default Regicomp;
