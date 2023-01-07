import { useFormik } from "formik";
import { signUpSchemas } from "../../schemas";

const SignUp = () => {

    const initialValues = {
        signUpUsername: "",
        signUpEmail: "",
        signUpPassword: "",
        signUpCPassword: "",
    };

    const {values, handleChange, handleBlur, handleSubmit, errors, touched} = useFormik({
        initialValues,
        validationSchema: signUpSchemas,
        onSubmit: (values,actions)=>
        {
            console.log(values);
            actions.resetForm();
        }
    });

    return (
        <form onSubmit={handleSubmit}>
            {errors.signUpUsername && touched.signUpUsername &&(
                <div className="error-container">
                    <p className="form-error">{errors.signUpUsername }</p>
                </div>
            )}
            <input 
                type="text" 
                name="signUpUsername" 
                placeholder="Username" 
                className="form-control" 
                value={values.signUpUsername}
                onBlur={handleBlur}
                onChange={handleChange} 
            />
            {errors.signUpEmail && touched.signUpEmail &&(
                <div className="error-container">
                    <p className="form-error">{errors.signUpEmail}</p>
                </div>
            )}
            <input 
                type="email" 
                name="signUpEmail" 
                placeholder="Email" 
                className="form-control" 
                value={values.signUpEmail}
                onBlur={handleBlur}
                onChange={handleChange} 
            />
            {errors.signUpPassword && touched.signUpPassword &&(
                <div className="error-container">
                    <p className="form-error">{errors.signUpPassword}</p>
                </div>
            )}
            <input 
                type="password" 
                name="signUpPassword" 
                placeholder="Password" 
                className="form-control" 
                value={values.signUpPassword}
                onBlur={handleBlur}
                onChange={handleChange} 
            />
            {errors.signUpCPassword && touched.signUpCPassword &&(
                <div className="error-container">
                    <p className="form-error">{errors.signUpCPassword}</p>
                </div>
            )}
            <input 
                type="password" 
                name="signUpCPassword" 
                placeholder="Confirm Password" 
                className="form-control" 
                value={values.signUpCPassword}
                onBlur={handleBlur}
                onChange={handleChange} 
            />  

            <button type="submit">Sign up</button>
        </form>
    );
}

export default SignUp
