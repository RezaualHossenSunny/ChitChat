import { useFormik } from "formik";
import React, { useState } from "react";
import { signUp } from "../../Validate/Validation";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,  // Ensure this is imported
} from "firebase/auth";
import { PropagateLoader } from "react-spinners";
import { Link, useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";

const Regicomp = ({ toast }) => {
  const auth = getAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
  };
  const db = getDatabase();

  const formik = useFormik({
    initialValues,
    onSubmit: () => {
      createSignUp();
    },
    validationSchema: signUp,
  });

  const showToast = (message, type) => {
    toast[type](message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const createSignUp = async () => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formik.values.email,
        formik.values.password
      );
      const user = userCredential.user;

      await updateProfile(auth.currentUser, {
        displayName: formik.values.fullName,
      });
     
      await sendEmailVerification(auth.currentUser);
      showToast("Verification email sent!", "success");

      await set(ref(db, "users/" + user.uid), {
        username: formik.values.fullName,
        email: user.email,
      });

      setTimeout(() => {
        navigate('/login');
      }, 2000);
      
    } catch (error) {
      const errorMessage = error.code === "auth/email-already-in-use"
        ? "Email already in use"
        : error.message;
      showToast(errorMessage, "error");
    } finally {
      setLoading(false);
      formik.resetForm();
    }
  };

  return (
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
          disabled={loading}
        />
        {formik.errors.fullName && formik.touched.fullName && (
          <p className="font-roboto text-red-500">{formik.errors.fullName}</p>
        )}

        <input
          placeholder="Enter your email"
          className="py-2 px-3 w-full border border-2 border-gray-400 outline-none rounded-lg mb-3"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          type="email"
          disabled={loading}
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
          disabled={loading}
        />
        {formik.errors.password && formik.touched.password && (
          <p className="font-roboto text-red-500 mb-2">{formik.errors.password}</p>
        )}

        <button
          disabled={loading}
          className="w-full py-3 bg-slate-950 text-white rounded-xl"
          type="submit"
        >
          {loading ? <PropagateLoader color="#ffff" size={6} /> : "Sign Up"}
        </button>
      </form>
      <p className="mt-4 font-roboto font-bold text-base text-gray-400">
        Already have an account? Please{" "}
        <Link to="/login" className="hover:text-blue-700 text-xl underline">
          sign in
        </Link>.
      </p>
    </div>
  );
};

export default Regicomp;
