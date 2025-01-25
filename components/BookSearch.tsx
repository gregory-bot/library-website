import React from 'react';
import { Search } from 'lucide-react';

const BookSearch = ({ searchTerm, onSearch }) => {
  return (
    <div className="bg-white py-8 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search books by title, author, or genre..."
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
            className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default BookSearch;