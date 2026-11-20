
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <h2>TaskFlow</h2>
      </div>

      <div className="nav-links">
        <a href="/dashboard">Dashboard</a>
        <a href="/register">Register</a>
        <a href="login">Login</a>
        <a href="/tasks">View Tasks</a>
      </div>

      
        <button className="logout-btn">
          Logout
        </button>
      
    </nav>
  );
}

export default Navbar;
