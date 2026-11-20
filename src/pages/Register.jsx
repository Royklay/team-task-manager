
import AuthForm from "../components/AuthForm";
import { registerUser } from "../auth/authSlice";

import { useNavigate } from "react-router-dom";

function Register() {

    const navigate = useNavigate();

    const handleRegister = (username, email, password) => {

        const result = registerUser(username, email, password);

        alert(result);

        if (result === "Registration successful") {
            navigate("/login");
        }
    };

    return (
        <div>
            <AuthForm
                type="register"
                onSubmit={handleRegister}
            />
        </div>
    );
}

export default Register;
