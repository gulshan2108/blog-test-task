import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom"
import Admin from "../Pages/Admin";
import Login from "../Pages/Login"

const IndexRoute = () => {

    const userState = useSelector((state) => state.login)
    
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/admin" element={userState==false? <Navigate to="/" />:<Admin/>}/>
            </Routes>
        </>
    )
}

export default IndexRoute;