import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Layout/Navbar';
import { Home } from './pages/Home/Home';
import { CategoryPage } from './pages/Category/CategoryPage';
import { Footer } from './components/Footer/Footer';
import { Cart } from './components/Cart/Cart';
import { Checkout } from './pages/Checkout/Checkout';


function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);


  const addToCart = (product) => {
    setCartItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1, price: product.price || 2999 }];
    });
    setIsCartOpen(true);
  };


  const updateQuantity = (id, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeAll = () => setCartItems([]);

  const productData = {
    headphones: [
      { id: 1, name: 'XX99 Mark II', price: 2999, isNew: true, desc: 'The pinnacle of pristine audio.', image: "src\\assets\\product-xx99-mark-two-headphones\\desktop\\image-category-page-preview.jpg" },
      { id: 2, name: 'XX99 Mark I', price: 1750, isNew: false, desc: 'The gold standard for audiophiles.', image: "src\\assets\\product-xx99-mark-one-headphones\\desktop\\image-category-page-preview.jpg"},
      { id: 3, name: 'XX59 Headphones', price: 899, isNew: false, desc: 'The Headphones', image: "src\\assets\\product-xx59-headphones\\desktop\\image-category-page-preview.jpg"}
    ],
    speakers: [
      { id: 4, name: 'ZX7 Speaker', price: 3500, isNew: false, desc: 'Nice speaker.', image: "src/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg" },
      { id: 5, name: 'ZX9 Speaker', price: 4500, isNew: true, desc: 'Upgrade your sound system.', image: "src/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg" }
    ],
    earphones: [
      { id: 6, name: 'YX1 Earphones', price: 599, isNew: true, desc: 'Bespoke dynamic drivers.', image: "src/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg" }
    ]
  };

  return (
    <Router>
      <div className="app-main-wrapper">
        <Navbar onCartOpen={() => setIsCartOpen(true)} cartCount={cartItems.length} />

        <Cart 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
          cartItems={cartItems}
          updateQuantity={updateQuantity}
          removeAll={removeAll}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/headphones" element={<CategoryPage title="Headphones" products={productData.headphones} onAdd={addToCart} />} />
          <Route path="/speakers" element={<CategoryPage title="Speakers" products={productData.speakers} onAdd={addToCart} />} />
          <Route path="/earphones" element={<CategoryPage title="Earphones" products={productData.earphones} onAdd={addToCart} />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;