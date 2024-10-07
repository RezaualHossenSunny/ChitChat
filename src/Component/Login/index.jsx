import { useFormik } from "formik";
import React, { useState } from "react";
import { login } from "../../Validate/Validation";

const Logincomp = ({ toast }) => {
  const [loding, Setloding] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: () => {
      console.log("submit");
    },
    validationSchema: login,
  });

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
            {loding ? <PropagateLoader color="#ffff" size={6} /> : "Sign In"}
          </button>
        </form>
        <p className="mt-4 font-roboto font-bold text-base text-gray-400">
          Don’t have an account please sign up
        </p>
      </div>
    </>
  );
};

export default Logincomp;
