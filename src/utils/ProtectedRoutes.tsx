import { Outlet, Navigate, useLoaderData } from "react-router-dom";


const ProtectedRoutes = () => {
    const user = useLoaderData();
    return user ? <Outlet /> : <Navigate to={"/login"} />;
}

export default ProtectedRoutes;