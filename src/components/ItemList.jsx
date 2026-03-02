import ItemCard from './ItemCard'
import '../styles/ItemListContainer.css'

function ItemList({ greeting, loading, products }) {
  return (
    <div className="item-list-container">
      {greeting && <h2 className="greeting">{greeting}</h2>}

      {loading ? (
        <div className="loading">Cargando productos...</div>
      ) : (
        <>
          {products.length > 0 ? (
            <div className="products-grid">
              {products.map(product => (
                <ItemCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="no-products">
              <p>No hay productos en esta categoría</p>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default ItemList
