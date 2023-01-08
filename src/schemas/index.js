import * as Yup from "yup";

export const signUpSchemas = Yup.object({
    signUpUsername: Yup.string().min(3, "Username must be at least 3 characters").required("Please enter your username."),
    signUpEmail: Yup.string().email("Please enter valid Email.").required("Please enter your email.")
    .test(
        "is-email-not-exist", 
        "Email address already exist.",
        async (value) => {
            let options = {
                method: 'GET',
                headers: {
                    'Content-Type':
                    'application/json;charset=utf-8'
                }
            }
            let response = await fetch("http://localhost:8000/checkemail?email="+value,options);
            let data = await response.json();
            return Object.keys(data).length === 0;
        }
    ),
    signUpPassword: Yup.string().min(8, "Password must be at least 8 characters").required("Please enter your password."),
    signUpCPassword: Yup.string().oneOf([Yup.ref("signUpPassword")], "Password do NOT match.").required("Please enter confirm password.")
});

export const loginSchemas = Yup.object({
    loginEmail: Yup.string().email("Please enter valid Email.").required("Please enter your email.")
    .test(
        "is-email-exist", 
        "Email address not exist.",
        async (value) => {
            let options = {
                method: 'GET',
                headers: {
                    'Content-Type':
                    'application/json;charset=utf-8'
                }
            }
            let response = await fetch("http://localhost:8000/checkemail?email="+value,options);
            let data = await response.json();
            return Object.keys(data).length !== 0;
        }
    ),
    loginPassword: Yup.string().min(8, "Password must be at least 8 characters").required("Please enter your password.")
});