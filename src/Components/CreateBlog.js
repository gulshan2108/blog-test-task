import { addBlog } from "../Redux/Actions/Index";
import { useFormik } from 'formik';
import { useState } from "react";
import * as yup from 'yup';
import { TextField, Modal, Box, Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";

const validationSchema = yup.object({
    title: yup
        .string('Enter title name')
        .required('title name is required'),
    author: yup
        .string('Enter author name')
        .required('author name is required'),
});

export const CreateBlog = ({ open, handleClose }) => {

    const dispatch = useDispatch()

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const formik = useFormik({
        initialValues: {
            title: '',
            author: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            dispatch(addBlog(values))
            handleClose()
        }
    });

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={formik.handleSubmit}>
                        <Box className="new-blog-wrapper">
                            <Typography className="new-blog" variant="h4" component="h4">
                                Blog Details
                            </Typography>
                            <Box className="new-blog-input">
                                <TextField
                                    variant="outlined"
                                    id="title"
                                    name="title"
                                    label="Title"
                                    value={formik.values.title}
                                    onChange={formik.handleChange}
                                    error={formik.touched.title &&
                                        Boolean(formik.errors.title)}
                                    helperText={formik.touched.title && formik.errors.title}
                                />
                            </Box>
                            <Box className="new-blog-input">
                                <TextField
                                    variant="outlined"
                                    id="author"
                                    name="author"
                                    label="Author"
                                    type="author"
                                    value={formik.values.author}
                                    onChange={formik.handleChange}
                                    error={formik.touched.author &&
                                        Boolean(formik.errors.author)}
                                    helperText={formik.touched.author &&
                                        formik.errors.author}
                                />
                            </Box>
                            <Button color="primary" variant="contained"
                                type="submit">submit</Button>
                        </Box>
                    </form>
                </Box>
            </Modal>
        </>
    )
}