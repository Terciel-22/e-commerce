import { useFormik } from "formik";
import { loginSchemas } from "../../schemas";

const Login = () => {

    const initialValues = {
        loginEmail: "",
        loginPassword: "",
    };

    const {values, handleChange, handleBlur, handleSubmit, errors, touched} = useFormik({
        initialValues,
        validationSchema: loginSchemas,
        onSubmit: (values,actions)=>
        {
            console.log(values);
            actions.resetForm();
        }
    });

    return (
        <form onSubmit={handleSubmit}>
            {errors.loginEmail && touched.loginEmail &&(
                <div className="error-container">
                    <p className="form-error">{errors.loginEmail}</p>
                </div>
            )}
            <input 
                type="email" 
                name="loginEmail" 
                placeholder="Email" 
                className="form-control" 
                value={values.signEmail}
                onBlur={handleBlur}
                onChange={handleChange} 
            />
            {errors.loginPassword && touched.loginPassword &&(
                <div className="error-container">
                    <p className="form-error">{errors.loginPassword}</p>
                </div>
            )}
            <input 
                type="password" 
                name="loginPassword" 
                placeholder="Password" 
                className="form-control" 
                value={values.loginPassword}
                onBlur={handleBlur}
                onChange={handleChange} 
            />
            <button type="submit">Login</button>
            <a href="/forgotPassword">Forgot Password?</a>
        </form>
    );
}

export default Login
