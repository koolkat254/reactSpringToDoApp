import { Link } from "react-router-dom";
// import { useAuth } from "../../services/AuthContext";

export const NavBar = () => {
    // const { isAuthenticated, logout } = useAuth();
  return (
    <nav className="navbar navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        MyApp
      </Link>

      <Link className="nav-link" to="/">
        Home
      </Link>

      <Link className="nav-link" to="/todo">
        Todo
      </Link>
    </nav>
  );
};
