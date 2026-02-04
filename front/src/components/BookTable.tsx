import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, Pencil, Trash2 } from "lucide-react";

import type { Book } from "../types/book";
import { useBookStore } from "../store/bookStore";
import AddEditBookModal from "./AddEditBookModal";
import BookTableSkeleton from "./BookTableSkeleton";
import { useSkeletonCount } from "../utils/getSkeletonCount";

interface Props {
  books: Book[];
}

const BookTable = ({ books }: Props) => {
  const navigate = useNavigate();
  const { removeBook, loading } = useBookStore();
  const [editBook, setEditBook] = useState<Book | null>(null);
  const count=useSkeletonCount();
  if (loading) {
    return <BookTableSkeleton count={count} />;
  }

  if (books.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        No books found
      </div>
    );
  }

  return (
    <>
      <div
        className="
          grid gap-5
          grid-cols-1
          sm:grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
        "
      >
        {books.map((book) => (
          <div
            key={book._id}
            onClick={() => navigate(`/books/${book._id}`)}
            className="
              cursor-pointer
              rounded-lg
              border border-green-200
              bg-green-100
              shadow-sm
              hover:shadow-md
              transition
              p-4
              flex flex-col justify-between
            "
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                {book.title}
              </h3>

              <p className="text-sm text-gray-600 mt-1">
                Author: <span className="font-medium">{book.author}</span>
              </p>

              {book.publisher && (
                <p className="text-sm text-gray-600 mt-1">
                  Publisher: {book.publisher}
                </p>
              )}
            </div>


            <div className="flex items-center gap-4 mt-4 text-sm">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/books/${book._id}`);
                }}
                className="flex items-center gap-1 text-blue-600 hover:text-blue-700"
              >
                <Eye className="w-4 h-4" />
                View
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setEditBook(book);
                }}
                className="flex items-center gap-1 text-emerald-600 hover:text-emerald-700"
              >
                <Pencil className="w-4 h-4" />
                Edit
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeBook(book._id!);
                }}
                className="flex items-center gap-1 text-red-600 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4" />
                Delete
              </button>
            </div>
          </div>
        ))}
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
