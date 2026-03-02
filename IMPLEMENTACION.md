# Guía de Implementación - ItemListContainer e ItemDetailContainer

## ✅ Lo que se ha implementado

### 1. **Sistema de Datos Dinámicos**
- Archivo `src/data/products.js` con un array de 6 productos de ejemplo
- Cada producto contiene: id, nombre, precio, categoría, imagen, descripción y stock
- Funciones helper: `getProductById()`, `getProductsByCategory()`, `getCategories()`

### 2. **Componentes**

#### **ItemListContainer** (`src/components/ItemListContainer.jsx`)
- Genera dinámicamente una lista de productos
- Soporta filtrado por categoría mediante parámetros de ruta
- Muestra estado de carga
- Renderiza componentes `ItemCard` para cada producto
- Props: `greeting` (optional)

#### **ItemCard** (`src/components/ItemCard.jsx`)
- Componente reutilizable para mostrar cada producto
- Imagen, nombre, categoría, precio
- Botones: "Ver Detalle" y "Agregar al Carrito"
- Link dinámico a la vista de detalle

#### **ItemDetailContainer** (`src/components/ItemDetailContainer.jsx`)
- Muestra información completa del producto
- Extrae el ID de la URL con `useParams()`
- Estados de carga y error
- Control de cantidad (incrementar/decrementar)
- Validaciones de stock
- Botón "Volver al catálogo"

### 3. **Navegación con React Router**
- Rutas configuradas en `App.jsx`:
  - `/` - Listado general de productos
  - `/category/:categoryId` - Productos por categoría
  - `/item/:id` - Detalle de producto
- NavBar actualizada con `Link` de React Router
- Enlaces dinámicos a categorías: Tortas, Postres, Pasteles

### 4. **Estilos**
- `ItemListContainer.css` - Grid responsive de productos
- `ItemCard.css` - Tarjetas de productos con efectos hover
- `ItemDetailContainer.css` - Vista detallada con diseño responsivo
- `App.css` - Estilos de navbar y componentes globales

## 🚀 Cómo funciona

### Flujo de Datos
1. Usuario abre la app → Ve `ItemListContainer` con todos los productos
2. Usuario hace clic en una categoría → Se filtra el listado por categoría
3. Usuario hace clic en "Ver Detalle" → Se abre `ItemDetailContainer` con `/item/:id`
4. En detalle, usuario puede:
   - Ver información completa del producto
   - Cambiar cantidad (respeta el stock disponible)
   - Volver al catálogo con el botón "← Volver"

### Categorías Disponibles
- **tortas** - Torta de Chocolate, Torta de Fresas
- **postres** - Cheesecake, Brownies, Tiramisú
- **pasteles** - Cupcakes de Vainilla

## 📝 Ejemplos de URLs
- `http://localhost:5173/` - Inicio con todos los productos
- `http://localhost:5173/category/tortas` - Solo tortas
- `http://localhost:5173/category/postres` - Solo postres
- `http://localhost:5173/item/1` - Detalle de Torta de Chocolate
- `http://localhost:5173/item/3` - Detalle de Brownies

## 🔧 Próximas mejoras (Opcional)

1. **Carrito de compras** - Integrar estado global (Context API o Redux)
2. **API Real** - Reemplazar mock data con llamadas a servidor
3. **Búsqueda** - Añadir buscador de productos
4. **Filtros avanzados** - Por precio, rating, etc.
5. **Paginación** - Si hay muchos productos
6. **Comentarios** - Sistema de reseñas en detalle

## 📦 Dependencias Instaladas
```json
{
  "react-router-dom": "^6.x.x"
}
```

Para ejecutar: `npm run dev`
