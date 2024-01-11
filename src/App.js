import Products from './components/Products'
import MyCart from './components/MyCart'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import { useState } from 'react'
import './App.css';

const App=()=>{
  const [cart,setCart]=useState([]);

    const products=[
        { id: 1, name: 'Sylvi Timegrapher Luxury Business Casual Party-Wear Chronograph Date Display Watch for Men', price: 1200,imgurl:"https://res.cloudinary.com/dubxsexua/image/upload/v1704957159/samples/9dac52ffbd3786b3f8de5685e8556df9_cbmpxp.jpg" },
        { id: 2, name: 'Campus Mens Terminator (N) Running Shoes', price: 1300,imgurl:"https://res.cloudinary.com/dubxsexua/image/upload/v1675228659/cld-sample-5.jpg" },
        {id:3,name:'FYLTR Mens Solid 100% Cotton Casual Full Sleeves Shirt with Pocket',price:1500,imgurl:"https://res.cloudinary.com/dubxsexua/image/upload/v1704959166/samples/men-formal-shirts-500x500_ke3vsv.webp"},
        {id:4,name:'HP [Smart Choice] Victus Gaming Laptop AMD Ryzen 5 5600H 15.6 (39.6 cm) FHD IPS (8GB RAM/512GB SSD',price:5000,imgurl:"https://res.cloudinary.com/dubxsexua/image/upload/v1704967916/samples/1217fb8ea50507c177868f7553da8804_n2mcl7.jpg"}
    ]

    const addToCart=(product)=>{
        const existingProductIndex = cart.findIndex((p) => p.id === product.id);

        if (existingProductIndex !== -1) {
          const updatedCart = [...cart];
          updatedCart[existingProductIndex].qty += 1;
          setCart(updatedCart);
        } else {
          setCart([...cart, { ...product, qty: 1 }]);
        }
    }

    const removeFromCart = (productId) => {
      const existingProductIndex = cart.findIndex((product) => product.id === productId);
    
      if (existingProductIndex !== -1) {
        const updatedCart = [...cart];
    
        if (updatedCart[existingProductIndex].qty > 1) {
          updatedCart[existingProductIndex].qty -= 1;
        } else {
          updatedCart.splice(existingProductIndex, 1);
        }
    
        setCart(updatedCart);
      }
    };
  return (
  <div className='container'>
  <h1>Products Catalogue</h1>
  <BrowserRouter>
  <Link to="/my-cart" className="cart-icon">
    🛒 {cart.reduce((total, product) => total + product.qty, 0)}
  </Link>
  <Routes>
  <Route exact path="/" element={<Products products={products} addToCart={addToCart} />} />
  <Route exact path="/my-cart" element={<MyCart cart={cart} removeFromCart={removeFromCart} />} />

  </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App;
