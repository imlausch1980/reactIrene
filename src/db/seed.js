import db from "./db.js";
import { collection, addDoc } from "firebase/firestore";
export const products = [
  {
    id: 1,
    name: "Torta de Chocolate",
    price: 45.99,
    category: "tortas",
    image: "/assets/torta chocolate.jpg",
    description: "Deliciosa torta de chocolate negro con cobertura de ganache",
    stock: 5
  },
  {
    id: 2,
    name: "Cheesecake",
    price: 38.50,
    category: "postres",
    image: "/assets/cheescake.jpg",
    description: "Clásico cheesecake con base de galletitas y mermelada de fresa",
    stock: 3
  },
  {
    id: 3,
    name: "Brownies",
    price: 12.99,
    category: "postres",
    image: "/assets/brownie.jpg",
    description: "Brownies artesanales de chocolate con nueces",
    stock: 10
  },
  {
    id: 4,
    name: "Tiramisú",
    price: 42.00,
    category: "postres",
    image: "/assets/tiramisu.jpg",
    description: "Tradicional tiramisú italiano con café y mascarpone",
    stock: 4
  },
  {
    id: 5,
    name: "Cupcakes de Vainilla",
    price: 8.50,
    category: "pasteles",
    image: "/assets/cupacakes.jpg",
    description: "Cupcakes de vainilla decorados con frosting de crema",
    stock: 15
  },
  {
    id: 6,
    name: "Torta de Frutillas",
    price: 52.00,
    category: "tortas",
    image: "/assets/torta frutillas.jpg",
    description: "Torta esponjosa rellena de crema y fresas frescas",
    stock: 2
  }
];

const seedProducts = async () => {
    try {
    const productref = collection(db, "products");
    for (const product of products) {
        const { id, ...productData } = product;
        await addDoc(productref, productData);
        console.log(`Producto ${product.name} agregado a Firestore`);
    }
    console.log("Seeding de productos completado.");
}
    catch (error) {
        console.error("Error al agregar productos a Firestore:", error);
    }
} 

// invoke the seeding function when the script is run
seedProducts();
