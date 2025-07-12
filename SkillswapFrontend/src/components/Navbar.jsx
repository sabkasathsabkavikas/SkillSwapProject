import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/search">Search</Link>
      <Link to="/swaps">Swaps</Link>
      <Link to="/admin">Admin</Link>
    </nav>
  );
}
export default Navbar;
