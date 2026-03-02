import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import { useCart } from '../context/CartContext'

function NavBar() {
  const { getTotalItems } = useCart()

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/logopasteleria.jpg" alt="Logo Pastelería" className="logo-image" />
          <span className="logo-text">Mi Pastelería</span>
        </Link>
        
        <ul className="nav-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/category/tortas">Tortas</Link></li>
          <li><Link to="/category/postres">Postres</Link></li>
          <li><Link to="/category/pasteles">Pasteles</Link></li>
        </ul>

        <Link to="/cart" className="cart-link">
          <CartWidget />
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
