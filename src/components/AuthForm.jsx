
import { useState } from "react";

function AuthForm({ type, onSubmit }) {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(username, email, password);
    };

    return (
        <form onSubmit={handleSubmit}>

            <h2>{type === "register" ? "Register" : "Login"}</h2>

            {type === "register" && (
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            )}

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            <button type="submit">
                {type === "register" ? "Create Account" : "Login"}
            </button>

        </form>
    );
}

export default AuthForm;
