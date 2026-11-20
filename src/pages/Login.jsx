
import AuthForm from "../components/AuthForm";
import { loginUser } from "../auth/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const handleLogin = (username, email, password) => {

        const success = loginUser(email, password);

        if (success) {
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
