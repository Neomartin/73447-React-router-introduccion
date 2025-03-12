import { NavLink, Route, Routes } from 'react-router'
import './App.css'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'

function App() {

  return (
    <>
      <header>
        HEADER
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/about">Abotu</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main-container">
        <Routes>

          <Route path="/" element={  <h1>Home</h1>  } />

          <Route path="/contact" element={  <Contact />  } />

          <Route path="/register" element={  <h1>Register</h1>  } />

          <Route path="/about" element={  <About />  } />

        </Routes>
      </main>

      <footer>
        FOOTER
      </footer>
    </>
  )
}

export default App
