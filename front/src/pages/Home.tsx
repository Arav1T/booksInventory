import { useEffect } from "react";
import { Library } from "lucide-react";
import { useBookStore } from "../store/bookStore";
import BookTable from "../components/BookTable";

const Home = () => {
  const { books, getBooks, search } = useBookStore();

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  const filtered = books.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full px-3 sm:px-6 lg:px-8 py-4">
      
     
      <div className="mb-4 flex items-center gap-3 text-white">
        <Library className="w-6 h-6 text-emerald-400" />
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold">
            Book Inventory
          </h1>
          <p className="text-sm text-gray-300">
            Manage all books from one place
          </p>
        </div>
      </div>

     
      <div className="bg-white rounded-md shadow overflow-x-auto">
        <BookTable books={filtered}  />
      </div>

    </div>
  );
};

export default Home;
