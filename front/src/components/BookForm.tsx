import { useState, useEffect } from "react";
import type { Book } from "../types/book";
import { isEmailValid, isNumber } from "../utils/validators";
import Input from "./Input";

interface Props {
  initialData: Book | null;
  onSubmit: (data: Book) => void;
}

const BookForm = ({ initialData, onSubmit }: Props) => {
  const [form, setForm] = useState<Book>({
    title: "",
    author: "",
    publishedDate: "",
    publisher: "",
    overview: "",
    authorEmail: "",
    authorAge: 0,
  });

  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isEmailValid(form.authorEmail)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!isNumber(Number(form.authorAge))) {
      setError("Author age must be a number");
      return;
    }

    setError("");
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
     
      {error && (
        <p className="rounded bg-red-50 px-3 py-2 text-sm text-red-600 border border-red-200">
          {error}
        </p>
      )}

    
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Book title"
        />

        <Input
          name="author"
          value={form.author}
          onChange={handleChange}
          placeholder="Author name"
        />

        <Input
          name="authorEmail"
          value={form.authorEmail}
          onChange={handleChange}
          placeholder="Author email"
          type="email"
        />

        <Input
          name="authorAge"
          value={form.authorAge}
          onChange={handleChange}
          placeholder="Author age"
          type="number"
        />

        <Input
          name="publisher"
          value={form.publisher}
          onChange={handleChange}
          placeholder="Publisher"
        />

        <Input
          name="publishedDate"
          value={form.publishedDate}
          onChange={handleChange}
          placeholder="Published date"
          type="date"
        />
      </div>

    
      <textarea
        name="overview"
        value={form.overview}
        onChange={handleChange}
        placeholder="Book overview"
        rows={4}
        className="w-full rounded-md border border-green-200 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none resize-none"
      />

    
      <div className="flex justify-end pt-2">
        <button
          type="submit"
          className="rounded-md bg-green-600 px-6 py-2 text-sm font-medium text-white hover:bg-green-700 transition"
        >
          Save Book
        </button>
      </div>
    </form>
  );
};

export default BookForm;



