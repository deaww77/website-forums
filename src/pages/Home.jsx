import { Link } from "react-router-dom";

function Home() {
  const username = "Chanon";

  return (
    <main style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Welcome to Forums, {username}!</h1>
        <p style={styles.subtitle}>
          Join the discussion and connect with others.
        </p>
        <Link to="/register" style={styles.button}>
          Register Now
        </Link>
        <Link to="/login" style={styles.button}>
          Login
        </Link>
      </header>
    </main>
  );
}

const styles = {
  container: {
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f0f4f8",
    minHeight: "100vh",
  },
  header: {
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
    color: "#222",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "1.5rem",
  },
  button: {
    padding: "0.8rem 1.5rem",
    backgroundColor: "#007bff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "bold",
  },
};

export default Home;
