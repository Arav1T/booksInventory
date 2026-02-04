import BookForm from "./BookForm";
import type { Book } from "../types/book";
import { useBookStore } from "../store/bookStore";
import { X } from "lucide-react";

interface Props {
  book?: Book;
  onClose: () => void;
}

const AddEditBookModal = ({ book, onClose }: Props) => {
  const { addBook, editBook } = useBookStore();

  const handleSubmit = async (data: Book) => {
    if (book?._id) {
      await editBook(book._id, data);
    } else {
      await addBook(data);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-3">
     
      <div className="relative w-full max-w-lg rounded-xl bg-white shadow-lg border border-green-200 animate-scaleIn">
        
      
        <div className="flex items-center justify-between border-b border-green-100 px-5 py-4">
          <h2 className="text-lg sm:text-xl font-semibold text-green-900">
            {book ? "Edit Book" : "Add Book"}
          </h2>

          <button
            onClick={onClose}
            className="rounded-full p-1 text-gray-500 hover:bg-green-50 hover:text-green-700 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

    
        <div className="px-5 py-4 max-h-[75vh] overflow-y-auto">
          <BookForm initialData={book || null} onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default AddEditBookModal;
