import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";

// YUP validation schema
const validationSchema = yup.object({
    phoneNo: yup.string()
        .required()
        .matches(/^[0-9]/, "Must be only digits")
        .min(10, 'Phone Num Must Be 10 Digit Long')
        .max(10, 'Phone Num Must Be 10 digit Long'),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(10).required(),
})

const ReactHookForm = () => {

    const formContainer = {
        display: "flex",
        flexDirection: "column",
        maxWidth: "200px",
        margin: "0 auto",
    }
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div>
            <h2>form using react-hook-form</h2>
            <form onSubmit={handleSubmit(onSubmit)} style={formContainer}>
                <input type="text" placeholder='Phone Number'
                    {...register("phoneNo", { required: true, minLength: 10, maxLength: 10 })}
                />
                <React.Fragment>{errors.phoneNo?.message}</React.Fragment>
                <input type="text" placeholder='Email'
                    {...register("email", { required: true, maxLength: 20 })}
                />
                <React.Fragment>{errors.email?.message}</React.Fragment>
                <input type="password" placeholder='Password'
                    {...register("password", { required: true, minLength: 6, maxLength: 30 })}
                />
                <p>{errors.password?.message}</p>
                <input type="submit" />
            </form>
            <hr />
        </div>
    )
}

export default ReactHookForm