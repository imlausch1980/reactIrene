import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { fetchProductById } from '../services/productService'
import { useCart } from '../context/CartContext'
import ItemCount from './ItemCount'
import '../styles/ItemDetailContainer.css'

function ItemDetailContainer() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false) // track if added to cart
  const [stockExhausted, setStockExhausted] = useState(false)
  const { addItem } = useCart()

  useEffect(() => {
    setLoading(true)
    // Always fetch from Firestore
    fetchProductById(id)
      .then(foundProduct => {
        setProduct(foundProduct)
      })
      .finally(() => setLoading(false))
  }, [id])

  const handleAddToCart = () => {
    addItem(product, quantity)
    setAdded(true)
    if (quantity >= product.stock) {
      setStockExhausted(true)
    }
    console.log(`Agregado ${quantity} de ${product.name} al carrito`)
  }

  if (loading) {
    return <div className="detail-container loading">Cargando producto...</div>
  }

  if (!product) {
    return (
      <div className="detail-container">
        <button className="btn-back" onClick={() => navigate('/')}>
          ← Volver al catálogo
        </button>
        <p className="not-found">Producto no encontrado</p>
      </div>
    )
  }

  return (
    <div className="detail-container">
      <button className="btn-back" onClick={() => navigate('/')}>
        ← Volver al catálogo
      </button>
      
      <div className="detail-content">
        <div className="detail-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="detail-info">
          <span className="category-badge">{product.category}</span>
          <h1 className="detail-title">{product.name}</h1>
          
          <p className="detail-description">{product.description}</p>

          <div className="detail-specs">
            <div className="spec">
              <span className="spec-label">Precio:</span>
              <span className="spec-value">${product.price.toFixed(2)}</span>
            </div>
            <div className="spec">
              <span className="spec-label">Stock disponible:</span>
              <span className={`spec-value ${product.stock > 0 ? 'in-stock' : 'out-stock'}`}>
                {product.stock > 0 ? `${product.stock} unidades` : 'Sin stock'}
              </span>
            </div>
          </div>

          {!added && (
            <>
              <ItemCount
                stock={product.stock}
                initial={quantity}
                onQuantityChange={setQuantity}
              />

              <button 
                className="btn-add-cart-detail"
                onClick={handleAddToCart}
                disabled={product.stock === 0}
              >
                {product.stock > 0 ? 'Agregar al Carrito' : 'Sin stock'}
              </button>
            </>
          )}
          {added && (
            <>
              <p className="added-message">Producto agregado al carrito</p>
              {stockExhausted && (
                <p className="stock-exhausted-message">¡Agregaste todo el stock disponible!</p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ItemDetailContainer
