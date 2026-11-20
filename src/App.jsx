import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Import our pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/* Login page */}
                <Route path="/login" element={<Login />} />

                {/* Registration page */}
                <Route path="/register" element={<Register />} />

                {/* Dashboard page */}
                <Route path="/dashboard" element={<Dashboard />} />

                {/* Redirect the homepage to login */}
                <Route path="/" element={<Navigate to="/login" />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;