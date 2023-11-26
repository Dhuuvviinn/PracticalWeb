import * as Yup from "yup"

export const loginSchema = new Yup.object({
    name:Yup.string().min(2).max(25).required("Please enter your name"),
    password:Yup.string().min(6).required("Please enter your password"),
})
export const signUpSchema = new Yup.object({
    name:Yup.string().min(2).max(25).required("Please enter your name"),
    password:Yup.string().min(6).required("Please enter your password"),
    confirmPassword:Yup.string().required().oneOf([Yup.ref("password"),null],"Password must match")
})