import { link } from "react-router-dom"
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <h2>TaskFlow</h2>
      </div>

      <div className="nav-links">
        <link to="/dashboard" >Dashboard</link>
        <link to="/register" >Register</link>
        <link to="/login" >Login</link>
        
      </div>

      
        <button className="logout-btn">
          Logout
        </button>
      
    </nav>
  );
}

export default Navbar;
