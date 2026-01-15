function ItemListContainer({ greeting }) {
  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <p>Aquí se mostrarán los productos del catálogo</p>
    </div>
  )
}

export default ItemListContainer
