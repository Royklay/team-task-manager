import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h2>TaskFlow</h2>

      <div className="nav-links">
        <span>{user?.email}</span>

        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;

<nav className="flex items-center justify-between border-b border-gray-200 bg-white px-[8%] py-[18px]">
  <h2 className="text-2xl font-bold text-[#198754]">TaskManager</h2>

  <div className="flex items-center gap-5">
    <a href="/" className="text-gray-700 hover:text-[#198754]">
      Dashboard
    </a>
    <a href="/tasks" className="text-gray-700 hover:text-[#198754]">
      Tasks
    </a>
    <a href="/login" className="text-gray-700 hover:text-[#198754]">
      Login
    </a>
  </div>
</nav>;
