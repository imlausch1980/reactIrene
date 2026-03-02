import { db } from '../firebase/config'
import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from 'firebase/firestore'
// local mock data used as fallback when Firestore is empty or unavailable
import { products as mockProducts } from '../data/products.js'

// collection reference for products
const productsCol = collection(db, 'products')

// fetch all products or by category
export async function fetchProducts(category) {
  try {
    let q = productsCol
    if (category) {
      q = query(productsCol, where('category', '==', category))
    }
    const snapshot = await getDocs(q)
    // convert documents to plain objects including id
    const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    console.debug('fetchProducts - received', products.length, 'items', category ? `(category: ${category})` : '')

    if (products.length === 0) {
      console.warn('fetchProducts: no data from Firestore, falling back to mock data')
      return category
        ? mockProducts.filter(p => p.category === category)
        : mockProducts
    }

    return products
  } catch (err) {
    console.error('fetchProducts error', err)
    // fallback to local data if Firestore failed
    const fallback = category
      ? mockProducts.filter(p => p.category === category)
      : mockProducts
    return fallback
  }
}

// fetch one product by id
export async function fetchProductById(id) {
  const docRef = doc(db, 'products', id.toString())
  const snapshot = await getDoc(docRef)
  if (snapshot.exists()) {
    return { id: snapshot.id, ...snapshot.data() }
  }
  return null
}
