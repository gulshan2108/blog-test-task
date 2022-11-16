import { ADD_BLOG, DELETE_BLOG, LOGIN_USER, LOGOUT_USER } from "../Actions/ActionTypes";

const initialState = {
    user: [],
    blogs: [],
    login: false
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload,
                login: true
            }
        case LOGOUT_USER:
            return {
                ...state,
                login: false
            }
        case ADD_BLOG:
            return {
                ...state,
                blogs: [...state.blogs, action.payload]
            }
        case DELETE_BLOG:
            return {
                ...state,
                blogs: state.blogs.filter((item, index) => index != action.payload)
            }
        default:
            return state
    }
}

export default loginReducer;