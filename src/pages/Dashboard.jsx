import { logoutUser, getCurrentUser } from "../auth/authSlice";
import { useNavigate } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();

    const user = getCurrentUser();

    const handleLogout = () => {

        logoutUser();

        navigate("/login");
    };

    if (!user) {
        return null;
    }

    return (
        <div>

            <h1>Welcome {user.username}</h1>

            <p>You are logged in successfully.</p>

            <button onClick={handleLogout}>
                Logout
            </button>

        </div>
    );
}

export default Dashboard;