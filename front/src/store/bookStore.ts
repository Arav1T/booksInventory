import { create } from "zustand";
import * as api from "../api/bookApi";
import type { Book } from "../types/book";

interface BookStore {
  books: Book[];
  selectedBook: Book | null;
  loading: boolean;
  error: string | null;
  search: string;

  setSearch: (value: string) => void;
  getBooks: () => Promise<void>;
  getBookById: (id: string) => Promise<void>;
  addBook: (book: Book) => Promise<void>;
  editBook: (id: string, book: Book) => Promise<void>;
  removeBook: (id: string) => Promise<void>;
}

export const useBookStore = create<BookStore>((set) => ({
  books: [],
  selectedBook: null,
  loading: false,
  error: null,
  search: "",

  setSearch: (value) => set({ search: value }),

  getBooks: async () => {
    set({ loading: true });
    try {
      const res = await api.fetchBooks();
      set({ books: res.data.data, loading: false });
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },

  getBookById: async (id) => {
    const res = await api.fetchBookById(id);
    set({ selectedBook: res.data.data });
  },

  addBook: async (book) => {
    const res=await api.createBook(book);
    set((state) => ({ books: [...state.books, res.data.data] }));
  },

  editBook: async (id, book) => {
    const res=await api.updateBook(id, book);
    set((state) => ({
      books: state.books.map((b) => (b._id === id ? res.data.data : b)),
    }));
  },

  removeBook: async (id) => {
    console.log("Deleting book with id:", id)
    await api.deleteBook(id);
    set((state) => ({
      books: state.books.filter((b) => b._id !== id),
    }));
  },
}));
