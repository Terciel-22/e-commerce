import { useFormik } from 'formik';

const useValidation = (initialValues) => {

    useFormik({
        initialValues,
        onSubmit: (values)=>{
            return values;
        }
    });
}

export default useValidation