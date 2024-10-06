import * as Yup from "yup";

export const signUp = Yup.object({
  fullName: Yup.string().min(2).max(20).required("please enter your full name"),
  email: Yup.string().email().required("enter your email"),
  password: Yup.string()
    .min(7)
    .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,"please enter one spical chacter")
    .required("plaese enter your password"),
});
