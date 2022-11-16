import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from 'formik';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { loginUser } from "../Redux/Actions/Index";
import "./LoginStyle.css"
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const userState = useSelector((state) => state.login)

    const loginCred = {
        email: 'admin@gmail.com',
        password: '12345678'
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            if (values.email === loginCred.email && values.password === loginCred.password) {
                dispatch(loginUser(values))
            }
            else {
                toast("Invalid Credentials !!!")
            }
        }
    });

    useEffect(() => {
        if (userState == true) {
            navigate("/admin")
        }
    }, [userState])

    return (
        <div>
            <form className="login-page-bg" onSubmit={formik.handleSubmit}>
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={8}>
                        <Box className="login-wrapper">
                            <Box className="login-box">
                                <Typography className="title-name" variant="h4" component="h4">
                                    Login
                                </Typography>
                                <Box className="login-input">
                                    <TextField
                                        variant="outlined"
                                        id="email"
                                        name="email"
                                        label="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                    />
                                </Box>
                                <Box className="login-input">
                                    <TextField
                                        variant="outlined"
                                        id="password"
                                        name="password"
                                        label="Password"
                                        type="password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        error={formik.touched.password && Boolean(formik.errors.password)}
                                        helperText={formik.touched.password && formik.errors.password}
                                    />
                                </Box>
                                <Button color="primary" variant="contained" type="submit">submit</Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </form>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
}

export default Login;