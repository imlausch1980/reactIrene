import { useCart } from '../context/CartContext'

function CartWidget() {
  const { getTotalItems } = useCart()

  return (
    <div className="cart-widget">
      {/* show a simple cart emoji if no image is provided */}
      <span role="img" aria-label="Carrito" className="cart-icon">
        🛒
      </span>
      {getTotalItems() > 0 && (
        <span className="cart-count">{getTotalItems()}</span>
      )}
    </div>
  )
}

export default CartWidget
