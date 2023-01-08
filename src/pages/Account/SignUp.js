import { Formik, Form, Field } from "formik";
import { signUpSchemas } from "../../schemas";

const SignUp = () => {

    const initialValues = {
        signUpUsername: "",
        signUpEmail: "",
        signUpPassword: "",
        signUpCPassword: "",
    };

    const onSubmit = async (values,actions) =>
    {
        let options = {
			method: 'POST',
			headers: {
				'Content-Type':
				'application/json;charset=utf-8'
			},
			body: JSON.stringify(values)
		}
        
        let response = await fetch("http://localhost:8000/signup",options);
        let data = await response.json();

        console.log(data);
        actions.resetForm();
    }

    return (
        <Formik 
            initialValues={initialValues} 
            validationSchema={signUpSchemas} 
            onSubmit={onSubmit}
        >
            {({errors, touched}) => (
                <Form>
                    <Field
                        type="text"
                        name="signUpUsername"
                        placeholder="Username"
                        className="form-control"
                    />
                    {errors.signUpUsername && touched.signUpUsername && (
                        <div className="error-container">
                            <p className="form-error">{errors.signUpUsername }</p>
                        </div>
                    )}

                    <Field
                        type="email"
                        name="signUpEmail"
                        placeholder="Email"
                        className="form-control"
                    />
                    {errors.signUpEmail && touched.signUpEmail && (
                        <div className="error-container">
                            <p className="form-error">{errors.signUpEmail}</p>
                        </div>
                    )}

                    <Field
                        type="password"
                        name="signUpPassword"
                        placeholder="Password"
                        className="form-control"
                    />
                    {errors.signUpPassword && touched.signUpPassword && (
                        <div className="error-container">
                            <p className="form-error">{errors.signUpPassword}</p>
                        </div>
                    )}

                    <Field
                        type="password"
                        name="signUpCPassword"
                        placeholder="Confirm Password"
                        className="form-control"
                    />
                    {errors.signUpCPassword && touched.signUpCPassword && (
                        <div className="error-container">
                            <p className="form-error">{errors.signUpCPassword}</p>
                        </div>
                    )}

                    <button type="submit">Sign up</button>
                </Form>
            )}
        </Formik>
    );
}

export default SignUp
