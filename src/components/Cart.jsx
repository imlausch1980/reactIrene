import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import '../styles/Cart.css'

function Cart() {
  const { cartItems, removeItem, clearCart, getTotalItems } = useCart()
  const navigate = useNavigate()

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const handleConfirm = () => {
    alert('Compra confirmada. ¡Gracias por tu pedido!')
    clearCart()
    navigate('/thanks')
  }

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h2>Tu carrito está vacío</h2>
        <button onClick={() => navigate('/')}>Volver al catálogo</button>
      </div>
    )
  }

  return (
    <div className="cart-container">
      <h2>Mi Carrito</h2>
      <ul className="cart-list">
        {cartItems.map(item => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-info">
              <span className="cart-item-name">{item.name}</span>
              <span className="cart-item-qty">Cantidad: {item.quantity}</span>
              <span className="cart-item-price">
                Precio: ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
            <button
              className="cart-item-remove"
              onClick={() => removeItem(item.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <span>Total artículos: {getTotalItems()}</span>
        <span>Total precio: ${totalPrice.toFixed(2)}</span>
      </div>
      <div className="cart-actions">
        <button onClick={clearCart}>Vaciar carrito</button>
        <button onClick={handleConfirm}>Confirmar compra</button>
      </div>
    </div>
  )
}

export default Cart
