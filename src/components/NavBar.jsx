import CartWidget from './CartWidget'

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/logopasteleria.jpg" alt="Logo Pastelería" className="logo-image" />
          <span className="logo-text">Mi Pastelería</span>
        </div>
        
        <ul className="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#productos">Productos</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>

        <CartWidget />
      </div>
    </nav>
  )
}

export default NavBar
