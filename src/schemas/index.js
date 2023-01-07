import * as Yup from "yup";

export const signUpSchemas = Yup.object({
    signUpUsername: Yup.string().min(3, "Username must be at least 3 characters").required("Please enter your username."),
    signUpEmail: Yup.string().email("Please enter valid Email.").required("Please enter your email."),
    signUpPassword: Yup.string().min(8, "Password must be at least 8 characters").required("Please enter your password."),
    signUpCPassword: Yup.string().oneOf([Yup.ref("signUpPassword")], "Password do NOT match.").required("Please enter confirm password.")
});

export const loginSchemas = Yup.object({
    loginEmail: Yup.string().email("Please enter valid Email.").required("Please enter your email."),
    loginPassword: Yup.string().min(8, "Password must be at least 8 characters").required("Please enter your password.")
});