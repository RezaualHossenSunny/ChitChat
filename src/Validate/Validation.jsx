import * as Yup from 'yup';


export const signUp  = Yup.object({
    fullName: Yup.string().min(2).max(15).required("please enter your full name"),
    email: Yup.string().email().required("enter your email"),
    password: Yup.string().min(7).required("plaese enter your password"),
});