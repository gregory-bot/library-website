import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const PopupAd = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000); // Show after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-4 max-w-sm mx-2 relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-1 right-1 text-gray-500 hover:text-gray-700"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="mb-3">
          <img
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Library Books"
            className="w-full h-36 object-cover rounded-md"
          />
        </div>
        
        <h3 className="text-lg font-semibold mb-1">Discover Your Next Adventure!</h3>
        <p className="text-gray-600 text-sm mb-3">
          Explore our vast collection of books across all genres. 
          From timeless classics to modern masterpieces, find your perfect read today.
        </p>
        
        <a
          href="#books"
          onClick={() => setIsVisible(false)}
          className="block w-full bg-indigo-600 text-white text-center py-2 text-sm rounded-md hover:bg-indigo-700 transition-colors duration-300"
        >
          Get a Book
        </a>
      </div>
    </div>
  );
};

export default PopupAd;
