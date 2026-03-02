import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// data service that now queries Firestore
import { fetchProducts } from '../services/productService'
import ItemList from './ItemList'

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    // query Firestore instead of mock data
    console.log('ItemListContainer useEffect, categoryId=', categoryId)
    setLoading(true)
    fetchProducts(categoryId)
      .then(filteredProducts => {
        console.log('ItemListContainer fetched', filteredProducts.length, 'products for', categoryId)
        setProducts(filteredProducts)
      })
      .catch(err => {
        console.error('ItemListContainer: failed to load products', err)
      })
      .finally(() => setLoading(false))
  }, [categoryId])

  return <ItemList greeting={greeting} loading={loading} products={products} />

}

export default ItemListContainer
