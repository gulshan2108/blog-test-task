import { Navigate } from "react-router-dom";


export const PrivateRoute = ({
    user,
    children,
}) => {
    console.log(322,user)
    if (user == false) {
        return <Navigate to="/" replace />;
    }
    else{
    return children;
}
};