import { Button, Grid, Typography, Box, Card, CardActions, CardContent, Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../Redux/Actions/Index";
import "./adminStyle.css"
import { useEffect, useState } from "react";
import { CreateBlog } from "../Components/CreateBlog";
import { BlogList } from "../Components/BlogList";

const Admin = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const blogData = useSelector((state) => state.blogs)
    const userState = useSelector((state) => state.login)

    const logout = () => {
        dispatch(logoutUser())
    }

    useEffect(() => {
        if (userState == false) {
            navigate("/")
        }
    }, [userState])

    return (
        <Box className="blog-wrapper">
            <Grid container justifyContent="center" spacing={2} className="blog-header">
                <Grid item xs={4} className="text-left">
                    <Button className="logout-btn" color="primary" variant="contained"
                        onClick={logout}>Logout</Button>
                </Grid>
                <Grid item xs={4}>
                    <Typography className="blog-title-name" variant="h1" component="h2">
                        Blogs
                    </Typography>
                </Grid>
                <Grid item xs={4} className="text-right">
                    <Button className="add-blog-btn" color="primary" variant="contained"
                        onClick={handleOpen}>Add Blog</Button>
                </Grid>
                {blogData.map((item, index) => {
                    return (
                        <BlogList item={item} index={index} />
                    )
                })}
            </Grid>
            <CreateBlog setOpen={setOpen} open={open} handleClose={handleClose} />
        </Box>
    )
}

export default Admin;