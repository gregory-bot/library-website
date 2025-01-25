import React, { useState } from 'react';
import { Book as BookIcon, Edit } from 'lucide-react';

const initialBooks = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" },
  { id: 2, title: "1984", author: "George Orwell", genre: "Dystopian" },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic" },
  { id: 4, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" },
  { id: 5, title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance" },
  { id: 6, title: "Dune", author: "Frank Herbert", genre: "Science Fiction" },
  { id: 7, title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Classic" },
  { id: 8, title: "Lord of the Rings", author: "J.R.R. Tolkien", genre: "Fantasy" },
  { id: 9, title: "Brave New World", author: "Aldous Huxley", genre: "Dystopian" },
  { id: 10, title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction" },
  { id: 11, title: "The Da Vinci Code", author: "Dan Brown", genre: "Mystery" },
  { id: 12, title: "The Shining", author: "Stephen King", genre: "Horror" }
];

const BookList = ({ searchTerm, onAddToCart }) => {
  const [editingBook, setEditingBook] = useState(null);
  const [books, setBooks] = useState(initialBooks);

  const handleEdit = (book) => {
    setEditingBook({ ...book });
  };

  const handleSave = () => {
    setBooks(books.map(book => 
      book.id === editingBook.id ? editingBook : book
    ));
    setEditingBook(null);
  };

  const addNewBook = (newBook) => {
    setBooks([...books, { ...newBook, id: Date.now() }]);
  };

  const filteredBooks = books.filter(book => {
    if (!searchTerm) return true;
    const searchLower = searchTerm.toLowerCase();
    return (
      book.title.toLowerCase().includes(searchLower) ||
      book.author.toLowerCase().includes(searchLower) ||
      book.genre.toLowerCase().includes(searchLower)
    );
  });

  return (
    <section id="books" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Available Books
        </h2>
        {filteredBooks.length === 0 ? (
          <div className="text-center text-gray-600 py-8">
            <p>No books found matching your search.</p>
            <p className="mt-2">Try searching for a different title, author, or genre.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {editingBook?.id === book.id ? (
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={editingBook.title}
                      onChange={(e) => setEditingBook({ ...editingBook, title: e.target.value })}
                      className="w-full p-1 border rounded"
                    />
                    <input
                      type="text"
                      value={editingBook.author}
                      onChange={(e) => setEditingBook({ ...editingBook, author: e.target.value })}
                      className="w-full p-1 border rounded"
                    />
                    <input
                      type="text"
                      value={editingBook.genre}
                      onChange={(e) => setEditingBook({ ...editingBook, genre: e.target.value })}
                      className="w-full p-1 border rounded"
                    />
                    <button
                      onClick={handleSave}
                      className="w-full bg-indigo-600 text-white py-1 rounded"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-center mb-4">
                      <BookIcon className="h-8 w-8 text-indigo-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-center">
                      {book.title}
                    </h3>
                    <p className="text-gray-600 text-sm text-center mb-1">{book.author}</p>
                    <p className="text-indigo-600 text-sm font-medium text-center mb-3">{book.genre}</p>
                    <div className="flex justify-between mt-2">
                      <button
                        onClick={() => handleEdit(book)}
                        className="text-gray-600 hover:text-indigo-600"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => onAddToCart(book)}
                        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BookList;