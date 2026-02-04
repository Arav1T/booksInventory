import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, Pencil, Trash2 } from "lucide-react";

import type { Book } from "../types/book";
import { useBookStore } from "../store/bookStore";
import AddEditBookModal from "./AddEditBookModal";
import BookTableSkeleton from "./BookTableSkeleton";

interface Props {
  books: Book[];
}

const BookTable = ({ books }: Props) => {
  const navigate = useNavigate();
  const { removeBook, loading } = useBookStore();
  const [editBook, setEditBook] = useState<Book | null>(null);

  return (
    <>
    
      <div className="w-full rounded-lg border border-green-200 bg-white shadow-sm">
        
       
       <div className="max-h-105 md:max-h-130 xxl:max-h-150 overflow-y-auto overflow-x-auto custom-scrollbar">

          <table className="w-full table-auto border-collapse">
            
        
            <thead className="sticky top-0 z-10 bg-green-100 border-b border-green-200">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-green-900">
                  Title
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-green-900">
                  Author
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-green-900 hidden md:table-cell">
                  Publisher
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-green-900">
                  Actions
                </th>
              </tr>
            </thead>

     
            <tbody>
              {loading ? (
                <BookTableSkeleton rows={6} />
              ) : books.length === 0 ? (
                <tr>
                  <td
                    colSpan={4}
                    className="p-6 text-center text-sm text-gray-500"
                  >
                    No books found
                  </td>
                </tr>
              ) : (
                books.map((book) => (
                  <tr
                    key={book._id}
                    onClick={() => navigate(`/books/${book._id}`)}
                    className="border-t border-green-100 hover:bg-green-50 cursor-pointer transition"
                  >
                    <td className="px-4 py-3 text-sm text-gray-800 break-words">
                      {book.title}
                    </td>

                    <td className="px-4 py-3 text-sm text-gray-700 break-words">
                      {book.author}
                    </td>

                    <td className="px-4 py-3 text-sm text-gray-700 break-words hidden md:table-cell">
                      {book.publisher}
                    </td>

                
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3 text-sm">
                        
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/books/${book._id}`);
                          }}
                          className="flex items-center gap-1 text-blue-600 hover:text-blue-700"
                        >
                          <Eye className="w-4 h-4" />
                          <span className="hidden sm:inline">View</span>
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setEditBook(book);
                          }}
                          className="flex items-center gap-1 text-emerald-600 hover:text-emerald-700"
                        >
                          <Pencil className="w-4 h-4" />
                          <span className="hidden sm:inline">Edit</span>
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            removeBook(book._id!);
                          }}
                          className="flex items-center gap-1 text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                          <span className="hidden sm:inline">Delete</span>
                        </button>

                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

   
      {editBook && (
        <AddEditBookModal
          book={editBook}
          onClose={() => setEditBook(null)}
        />
      )}
    </>
  );
};

export default BookTable;
