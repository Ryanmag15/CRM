import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthMiddleware = props => {
    const logged = useSelector(state => state.auth.logged);

    return logged ? <Outlet /> : <Navigate to="/login" />;
};
export default AuthMiddleware;
