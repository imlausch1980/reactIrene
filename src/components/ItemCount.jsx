import { useState, useEffect } from 'react'
import '../styles/ItemDetailContainer.css' // reuse the quantity-selector styles

function ItemCount({ stock = 0, initial = 1, onQuantityChange }) {
  const [quantity, setQuantity] = useState(initial)

  useEffect(() => {
    // notify parent when quantity changes
    if (onQuantityChange) {
      onQuantityChange(quantity)
    }
  }, [quantity, onQuantityChange])

  const handleChange = (newQty) => {
    let q = newQty
    if (isNaN(q) || q < 1) q = 1
    if (q > stock) q = stock
    setQuantity(q)
  }

  return (
    <div className="quantity-selector">
      <label htmlFor="quantity">Cantidad:</label>
      <div className="quantity-controls">
        <button
          onClick={() => handleChange(quantity - 1)}
          disabled={quantity <= 1}
        >
          −
        </button>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => handleChange(parseInt(e.target.value, 10))}
          min="1"
          max={stock}
        />
        <button
          onClick={() => handleChange(quantity + 1)}
          disabled={quantity >= stock}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default ItemCount
