import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BookList from './components/BookList';
import BookSearch from './components/BookSearch';
import BookForm from './components/BookForm';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';
import PopupAd from './components/PopupAd';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (book) => {
    if (!cartItems.find(item => item.id === book.id)) {
      setCartItems([...cartItems, book]);
    }
  };

  const handleRemoveFromCart = (bookId) => {
    setCartItems(cartItems.filter(item => item.id !== bookId));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartCount={cartItems.length} onCartClick={() => setShowCart(!showCart)} />
      <Cart 
        isOpen={showCart} 
        onClose={() => setShowCart(false)}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
      />
      <PopupAd />
      <HeroSection />
      <BookSearch searchTerm={searchTerm} onSearch={setSearchTerm} />
      <BookList searchTerm={searchTerm} onAddToCart={handleAddToCart} />
      <BookForm onAddBook={(newBook) => {
        // Add the book to the available books list
        // This will be handled by the BookList component's addNewBook function
      }} />
      <About />
      <Contact />
      <ChatBot />
      <Footer />
    </div>
  );
}

export default App;