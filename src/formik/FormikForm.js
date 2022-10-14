import React from 'react';
import { Formik } from 'formik';
import * as yup from "yup";



const FormikForm = () => {

    // YUP validation schema
    const validate = yup.object({
        phoneNo: yup.string()
            .required("Required.")
            .matches(/^[0-9]/, "Must be only digits")
            .min(10, 'Phone Num Must Be 10 Digit Long')
            .max(10, 'Phone Num Must Be 10 digit Long'),
        email: yup.string().email().required("Required."),
        password: yup.string().min(6).max(10).required("Required."),
    })
    const formContainer = {
        display: "flex",
        flexDirection: "column",
        maxWidth: "200px",
        margin: "0 auto",
    }
    return (
        <>
            <h2>Form using Formik</h2>
            <Formik
                initialValues={{ phoneNo: '', email: '', password: '' }}
                validationSchema={validate}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({ handleChange, touched, handleSubmit, handleBlur, values, errors }) => (

                    <form onSubmit={handleSubmit} style={formContainer}>

                        <input type="text" placeholder='Phone Number' name="phoneNo"
                            onChange={handleChange} onBlur={handleBlur} value={values.phoneNo} />
                        {touched.phoneNo && errors.phoneNo}
                        <input type="text" placeholder='Email' name="email"
                            onChange={handleChange} onBlur={handleBlur} value={values.email} />
                        {touched.email && errors.email}
                        <input type="password" placeholder='Password' id="password"
                            onChange={handleChange} onBlur={handleBlur} value={values.password} />
                        {touched.password && errors.password}
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </>
    )
}

export default FormikForm