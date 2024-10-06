import { useFormik } from "formik";
import React from "react";
import { signUp } from "../../Validate/Validation";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Regicomp = () => {
  const auth = getAuth();

  const initialValues = {
    fullName: "",
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: () => {
      createSignUp();
    },
    validationSchema: signUp,
  });

  // firebase poblem fixed chatgpt

  
  const createSignUp = () => {
    createUserWithEmailAndPassword(auth, formik.values.email, formik.values.password)
      .then((userCredential) => {
        console.log('User signed up successfully:', userCredential.user);
        // Optionally reset the form or navigate
        formik.resetForm();
      })
      .catch((error) => {
        console.log('Error during sign up:', error.message);
      });
  };

  console.log(formik);
  
  return (
    <>
      <div>
        <h2 className="font-roboto mb-3 font-bold text-2xl">
          Welcome to ChitChat
        </h2>
        <form onSubmit={formik.handleSubmit}>
          <input
            placeholder="Enter your name"
            className="py-2 px-3 w-full border border-2 border-gray-400 outline-none rounded-lg mb-3"
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            type="text"
          />
          {formik.errors.fullName && formik.touched.fullName && (
            <p className="font-roboto text-red-500">
              {formik.errors.fullName}
            </p>
          )}

          <input
            placeholder="Enter your email"
            className="py-2 px-3 w-full border border-2 border-gray-400 outline-none rounded-lg mb-3"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            type="email"
          />
          {formik.errors.email && formik.touched.email&& (
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
          {formik.errors.password && formik.touched.password&& (
            <p className="font-roboto text-red-500 mb-2">
              {formik.errors.password}
            </p>
          )}
          
          <button className="w-full py-3 bg-slate-950 text-white rounded-xl" type="submit">
            Sign Up
          </button>
        </form>
        <p className="mt-4 font-roboto font-bold text-base text-gray-400">
          Already have an account? Please sign in.
        </p>
      </div>
    </>
  );
};

export default Regicomp;
