
import AuthForm from "../components/AuthForm";
import { loginUser } from "../auth/authSlice";


import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = (username, email, password) => {

        // Check login credentials
        const user = loginUser(email, password);

        if (user) {

            // Update Redux state
            dispatch(login({
                username: user.username,
                email: user.email
            }));

            alert("Login successful");
            navigate("/dashboard");

        } else {
            alert("Invalid email or password");
        }
    };

    return (
        <div>
            <AuthForm
                type="login"
                onSubmit={handleLogin}
            />

            <button onClick={() => navigate("/register")}>
                Create Account
            </button>
        </div>
    );
}

export default Login;
