import { persistor } from "../Store/Index";
import { ADD_BLOG, DELETE_BLOG, LOGIN_USER, LOGOUT_USER } from "./ActionTypes";

export const loginUser = (values) => {
    return {
        type: LOGIN_USER,
        payload: values
    }
}

export const logoutUser = () => {
    persistor.pause();
    persistor.flush().then(() => {
        return persistor.purge();
    });
    return {
        type: LOGOUT_USER
    }
}

export const addBlog = (values) => {
    return {
        type: ADD_BLOG,
        payload: values
    }
}

export const deleteBlog = (id) => {

    return {
        type: DELETE_BLOG,
        payload: id
    }
}