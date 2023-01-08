import { Formik, Form, Field } from "formik";
import { loginSchemas } from "../../schemas";

const Login = () => {

    const initialValues = {
        loginEmail: "",
        loginPassword: "",
    };

    const onSubmit = (values,actions)=>
    {
        console.log(values);
        actions.resetForm();
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={loginSchemas}
            onSubmit={onSubmit}
        >
            {({errors, touched})=>(
                <Form>
                    <Field
                        type="email"
                        name="loginEmail"
                        placeholder="Email"
                        className="form-control"
                    />
                    {errors.loginEmail && touched.loginEmail &&(
                        <div className="error-container">
                            <p className="form-error">{errors.loginEmail}</p>
                        </div>
                    )}
                
                    <Field
                        type="password"
                        name="loginPassword"
                        placeholder="Password"
                        className="form-control"
                    />
                    {errors.loginPassword && touched.loginPassword &&(
                        <div className="error-container">
                            <p className="form-error">{errors.loginPassword}</p>
                        </div>
                    )}
                    
                    <button type="submit">Login</button>
                    <a href="/forgotPassword">Forgot Password?</a>
                </Form>
            )}
        </Formik>
    );
}

export default Login
