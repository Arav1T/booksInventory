import { useState } from "react";
import { Plus, Search, BookOpen } from "lucide-react";
import AddEditBookModal from "./AddEditBookModal";
import { useBookStore } from "../store/bookStore";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { setSearch } = useBookStore();

  return (
    <nav className="sticky top-0 z-50 bg-linear-to-r from-slate-900 via-emerald-900 to-teal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          
     
          <div className="flex items-center gap-2 text-white">
            <BookOpen className="w-6 h-6 text-emerald-400" />
            <span className="font-semibold text-lg tracking-wide">
              Book Inventory
            </span>
          </div>

     
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4 w-full sm:w-auto">
            
 
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
              <input
                type="text"
                placeholder="Search books..."
                className="w-full pl-9 pr-3 py-2 text-sm rounded-md bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <button
              onClick={() => setOpen(true)}
              className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-black px-4 py-2 rounded-md text-sm font-medium transition"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Add Book</span>
            </button>
          </div>
        </div>
      </div>

      {open && <AddEditBookModal onClose={() => setOpen(false)} />}
    </nav>
  );
};

export default Navbar;
