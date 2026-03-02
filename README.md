# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [	ypescript-eslint](https://typescript-eslint.io) in your project.

---

## Firestore Integration

This project can use Firebase Firestore for product data instead of the local mock file.

### 1. Install Firebase SDK

`ash
npm install firebase
`

### 2. Configure Firebase

Create a file src/firebase/config.js (already added) and fill in your project credentials. You can supply them via environment variables, for example in a .env file at the project root:

`
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
`

The configuration exports a db instance from irebase/firestore.

### 3. Use the product service

The src/services/productService.js file contains helper functions:

- etchProducts(category?) � retrieves all products or filters by category.
- etchProductById(id) � retrieves a single document.

These are consumed in ItemListContainer and ItemDetailContainer.

The old mock implementation (`src/data/products.js`) was used during early development but is no longer referenced by the components. All product data now comes from Firestore via `src/services/productService.js`. Feel free to delete `src/data/products.js` if you don’t need it for reference.

### 4. Populate Firestore

Create a collection named products in your Firestore project and add documents with fields matching the schema used in the mock data: 
ame, price, category, image, description, stock.

### 5. Environment

Ensure VITE_ prefixed env vars are available before running the dev server (
pm run dev).

---
