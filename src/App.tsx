import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import HomePage from './pages/HomePage.tsx';
import ProductPage from './pages/ProductPage.tsx';
import CartPage from './pages/CartPage.tsx';
import './App.css';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const App: React.FC = () => {
  const [products] = useState<Product[]>([
    { id: 1, name: 'Marmellata di Fragole', description: 'Deliziosa marmellata di fragole fatta in casa', price: 5.99, image: '/image/strawberry-jam.jpg' },
    { id: 2, name: 'Marmellata di Arance', description: 'Gustosa marmellata di arance biologiche', price: 6.99, image: '/image/orange-jam.jpg' },
    { id: 3, name: 'Marmellata di albicocche', description: 'Deliziosa marmellata di fragole fatta in casa', price: 5.99, image: '/image/albicocchejam.jpg' },
    { id: 4, name: 'Marmellata di ciliegia', description: 'Gustosa marmellata di arance biologiche', price: 6.99, image: '/image/ciliegialam.jpg' },
    { id: 5, name: 'Marmellata di frutti di bosco', description: 'Deliziosa marmellata di fragole fatta in casa', price: 5.99, image: '/image/fruttidiboscojam.jpg' },
    { id: 6, name: 'Marmellata di lamponi', description: 'Gustosa marmellata di arance biologiche', price: 6.99, image: '/image/lamponijam.jpg' },
    { id: 7, name: 'Marmellata di mirtilli rossi', description: 'Deliziosa marmellata di fragole fatta in casa', price: 5.99, image: '/image/mirtillijam.jpg' },
    { id: 8, name: 'Marmellata di mirtilli neri', description: 'Gustosa marmellata di arance biologiche', price: 6.99, image: '/image/mirtillinerijam.jpg' }, 
    { id: 9, name: 'Marmellata di pesca', description: 'Deliziosa marmellata di fragole fatta in casa', price: 5.99, image: '/image/pescajam.jpg' },
    { id: 10, name: 'Marmellata di prugne', description: 'Gustosa marmellata di arance biologiche', price: 6.99, image: '/image/prugnejam.jpg' },
    { id: 11, name: 'Marmellata di ribes', description: 'Deliziosa marmellata di fragole fatta in casa', price: 5.99, image: '/image/ribesjam.jpg' },
    { id: 12, name: 'Marmellata di ribes rosso', description: 'Gustosa marmellata di arance biologiche', price: 6.99, image: '/image/ribesrossojam.jpg' },


  ]);

  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className='pag'>
    <Router>
      <div className="app">
        <Header cartItemsCount={cartItems.length} />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage products={products} />} />
            <Route path="/product/:id" element={<ProductPage products={products} addToCart={addToCart} />} />
            <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
          </Routes>
        
        </div>
        <Footer />
      </div>
    </Router>
    </div>
  );
};

export default App;
