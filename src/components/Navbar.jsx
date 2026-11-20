
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <h2>TaskFlow</h2>
      </div>

      <div className="nav-links">
        <link to="Dashboard" />
        <link to="Register" />
        <link to="login" />
        
      </div>

      
        <button className="logout-btn">
          Logout
        </button>
      
    </nav>
  );
}

export default Navbar;
