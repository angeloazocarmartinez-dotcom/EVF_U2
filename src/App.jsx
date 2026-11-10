import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Companeros from './pages/Companeros'
import Registro from './pages/Registro'

function App() {
  return (
    <BrowserRouter>
      <nav
        style={{
          display: 'flex',
          gap: '16px',
          padding: '16px 20px',
          background: '#111827',
          color: 'white',
        }}
      >
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? '#ffffff' : '#cbd5e1',
            textDecoration: 'none',
            fontWeight: isActive ? 700 : 400,
          })}
        >
          Inicio
        </NavLink>

        <NavLink
          to="/companeros"
          style={({ isActive }) => ({
            color: isActive ? '#ffffff' : '#cbd5e1',
            textDecoration: 'none',
            fontWeight: isActive ? 700 : 400,
          })}
        >
          Compañeros
        </NavLink>

        <NavLink
          to="/registro"
          style={({ isActive }) => ({
            color: isActive ? '#ffffff' : '#cbd5e1',
            textDecoration: 'none',
            fontWeight: isActive ? 700 : 400,
          })}
        >
          Registro
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/companeros" element={<Companeros />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App