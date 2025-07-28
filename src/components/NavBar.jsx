import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>Forums</h2>
      <div style={styles.links}>
        <Link to="/About" style={styles.link}>
          About
        </Link>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        <Link to="/register" style={styles.link}>
          Register
        </Link>
        <Link to="/login" style={styles.link}>
          Login
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#007bff",
    padding: "1rem 2rem",
    color: "#fff",
  },
  logo: {
    fontSize: "1.5rem",
    margin: 0,
  },
  links: {
    display: "flex",
    gap: "1rem",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Navbar;
