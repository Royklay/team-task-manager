
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <h2>TaskFlow</h2>
      </div>

      <div className="nav-links">
        <link rel="stylesheet" href="Dashboard" />
        <link rel="stylesheet" href="Register" />
        <link rel="stylesheet" href="login" />
        
      </div>

      
        <button className="logout-btn">
          Logout
        </button>
      
    </nav>
  );
}

export default Navbar;
