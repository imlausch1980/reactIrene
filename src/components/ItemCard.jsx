import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import '../styles/ItemCard.css'

function ItemCard({ product }) {
  const { addItem } = useCart()

  return (
    <div className="item-card">
      <img src={product.image} alt={product.name} className="item-image" />
      <div className="item-info">
        <h3 className="item-name">{product.name}</h3>
        <p className="item-category">{product.category}</p>
        <p className="item-price">${product.price.toFixed(2)}</p>
        <div className="item-actions">
          <Link to={`/item/${product.id}`} className="btn-detail">
            Ver Detalle
          </Link>
          <button
            className="btn-add-cart"
            onClick={() => addItem(product, 1)}
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemCard
