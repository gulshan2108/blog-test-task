import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { deleteBlog } from "../Redux/Actions/Index"

export const BlogList = ({ item, index }) => {

    const dispatch = useDispatch()

    const removeBlog = (id) => {
        dispatch(deleteBlog(id))
    }

    return (
        <>
            <Grid item xs={12} md={4} key={index}>
                <Card sx={{ minWidth: 275 }} className="card-wrapper">
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {item.title}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {item.author}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Read More</Button>
                    </CardActions>
                    <Button className="delete-btn" onClick={() => removeBlog(index)}>Delete</Button>
                </Card>
            </Grid>
        </>
    )
}