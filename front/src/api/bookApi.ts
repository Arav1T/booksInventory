import axios from "axios";
import type { Book } from "../types/book";
const apiUrl = import.meta.env.VITE_API_URL;
const API = axios.create({
  baseURL: apiUrl,
  withCredentials: true 
});

export const fetchBooks = () => API.get<{ data: Book[] }>("/");
export const fetchBookById = (id: string) =>
  API.get<{ data: Book }>(`/${id}`);

export const createBook = (data: Book) => API.post("/", data);
export const updateBook = (id: string, data: Book) =>
  API.put(`/${id}`, data);

export const deleteBook = (id: string) => API.delete(`/${id}`);
