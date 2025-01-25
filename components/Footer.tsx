import React from 'react';
import { Book } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center text-sm">
          <span>© {new Date().getFullYear()} Archives Digital</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;