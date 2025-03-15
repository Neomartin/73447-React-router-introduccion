import { NavLink, Route, Routes } from "react-router";
import "./App.css";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import AdminProduct from "./pages/AdminProduct/AdminProduct";
import Button from "./components/Button";
import AdminGuard from "./utils/guard/AdminGuard";

function App() {
  const userRole = "client";

  return (
    <>
      <header>
        HEADER
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={ `header-link '${({ isActive }) => isActive ? 'active' : ''}`  }>Home</NavLink>
            </li>
            <li>
              <NavLink className="header-link" to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink className="header-link" to="/about">Abotu</NavLink>
            </li>
            <li>
              <NavLink className="header-link" to="/register">Register</NavLink>
            </li>
            {userRole === "admin" && (
              <li>
                <NavLink className="header-link" to="/admin-product">Admin Product</NavLink>
              </li>
            )}
          </ul>
        </nav>
      </header>

      <Button>
            <div>
              <input type="text" />
              <span>🤖</span>
            </div>

      </Button>

      <Button />

      <main className="main-container">
        <h1>PAGINAS</h1>
        <Routes>
          <Route path="/" exact element={<h1>Home</h1>} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/register" element={<h1>Register</h1>} />

          <Route path="/about" element={<About />} />

          <Route  path="/admin-product" 
                  element={
                            <AdminGuard>

                                <AdminProduct />

                            </AdminGuard>
                  } 
          />

          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </main>

      <footer>FOOTER</footer>
    </>
  );
}

export default App;
