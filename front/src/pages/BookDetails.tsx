import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Pencil, Trash2, ArrowLeft, BookOpen } from "lucide-react";
import { useBookStore } from "../store/bookStore";
import type { Book } from "../types/book";
import AddEditBookModal from "../components/AddEditBookModal";

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { selectedBook, getBookById, removeBook } = useBookStore();
  const [editBook, setEditBook] = useState<Book | null>(null);

  useEffect(() => {
    if (id) getBookById(id);
  }, [id, getBookById]);

  if (!selectedBook) {
    return (
      <div className="px-4 py-6 text-gray-200">
        Loading book details...
      </div>
    );
  }

  return (
    <div className="w-full px-3 sm:px-6 lg:px-8 py-4">
      
      
      <button
        onClick={() => navigate(-1)}
        className="mb-4 flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-400"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

   
     <div className="flex justify-center items-center">
       <div className="bg-white rounded-lg shadow p-4 sm:p-6 max-w-3xl ">
        

        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-emerald-600" />
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
              {selectedBook.title}
            </h2>
          </div>

    
          <div className="flex gap-2">
            <button
              onClick={() => setEditBook(selectedBook)}
              className="flex items-center gap-1 text-sm px-3 py-1.5 rounded border border-emerald-600 text-emerald-700 hover:bg-emerald-50"
            >
              <Pencil className="w-4 h-4" />
              Edit
            </button>

            <button
              onClick={() => removeBook(selectedBook._id!)}
              className="flex items-center gap-1 text-sm px-3 py-1.5 rounded border border-red-600 text-red-600 hover:bg-red-50"
            >
              <Trash2 className="w-4 h-4" />
              Delete
            </button>
          </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
          <p><b>Author:</b> {selectedBook.author}</p>
          <p><b>Email:</b> {selectedBook.authorEmail}</p>
          <p><b>Age:</b> {selectedBook.authorAge}</p>
          <p><b>Publisher:</b> {selectedBook.publisher}</p>
          <p><b>Published Date:</b> {selectedBook.publishedDate}</p>
        </div>


        <div className="mt-4">
          <h3 className="font-semibold text-gray-800 mb-1">
            Overview
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {selectedBook.overview}
          </p>
        </div>
      </div>
     </div>

      {editBook && (
        <AddEditBookModal
          book={editBook}
          onClose={() => setEditBook(null)}
        />
      )}
    </div>
  );
};

export default BookDetails;
