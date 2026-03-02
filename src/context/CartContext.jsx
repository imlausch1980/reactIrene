import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

// Hook for components to easily consume cart context
export function useCart() {
  return useContext(CartContext)
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  const addItem = (product, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        // update quantity
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prev, { ...product, quantity }]
    })
  }

  const removeItem = id => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const clearCart = () => setCartItems([])

  const getTotalItems = () =>
    cartItems.reduce((total, item) => total + item.quantity, 0)

  const value = {
    cartItems,
    addItem,
    removeItem,
    clearCart,
    getTotalItems,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
