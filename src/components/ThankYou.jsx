import { useNavigate } from 'react-router-dom'
import '../styles/Cart.css'

function ThankYou() {
  const navigate = useNavigate()

  return (
    <div className="cart-container">
      <h2>¡Gracias por tu compra!</h2>
      <p>Tu pedido ha sido procesado correctamente.</p>
      <button onClick={() => navigate('/')}>Volver al catálogo</button>
    </div>
  )
}

export default ThankYou
