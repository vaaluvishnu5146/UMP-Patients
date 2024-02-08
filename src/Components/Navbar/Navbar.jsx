import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/signin">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/">Appointments</Link>
    </div>
  );
}
