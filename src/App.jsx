import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/NavBar";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />}>
          {" "}
        </Route>
      </Routes>
    </>
  );
}

export default App;
