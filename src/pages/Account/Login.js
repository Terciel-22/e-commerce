import { useContext } from "react";
import { Formik, Form, Field } from "formik";
import { loginSchemas } from "../../schemas";
import AuthContext from "../../context/AuthProvider";

const Login = () => {

    const { setAuth } = useContext(AuthContext);

    const initialValues = {
        loginEmail: "",
        loginPassword: "",
    };

    const onSubmit = async (values, actions) => {
        // let options = {
        // 	method: 'POST',
        // 	headers: {
        // 		'Content-Type':
        // 		'application/json;charset=utf-8'
        // 	},
        // 	body: JSON.stringify(values)
        // }

        // let response = await fetch("http://localhost:8000/login",options);
        // let data = await response.json();

        // if(data[0]?.email === values.loginEmail)
        // {
        //     setAuth({data})
        // }

        // actions.resetForm();
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={loginSchemas}
            onSubmit={onSubmit}
        >
            {({ errors, touched }) => (
                <Form>
                    <Field
                        type="email"
                        name="loginEmail"
                        placeholder="Email"
                        className="form-control"
                    />
                    {errors.loginEmail && touched.loginEmail && (
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
                    {errors.loginPassword && touched.loginPassword && (
                        <div className="error-container">
                            <p className="form-error">{errors.loginPassword}</p>
                        </div>
                    )}

                    <button type="submit">Login</button>
                    <a href="#" className="text-decoration-none">Forgot Password?</a>
                </Form>
            )}
        </Formik>
    );
}

export default Login
