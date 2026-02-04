const Book = require("../models/book.model");


exports.createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json({
      success: true,
      data: book,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


exports.getAllBooks = async (req, res) => {
  const books = await Book.find().sort({ createdAt: -1 });
  res.json({
    success: true,
    count: books.length,
    data: books,
  });
};


exports.getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book)
    return res.status(404).json({ message: "Book not found" });

  res.json({ success: true, data: book });
};


exports.updateBook = async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!book)
    return res.status(404).json({ message: "Book not found" });

  res.json({ success: true, data: book });
};


exports.deleteBook = async (req, res) => {
  const book = await Book.findByIdAndDelete(req.params.id);
  if (!book)
    return res.status(404).json({ message: "Book not found" });

  res.json({ success: true, message: "Book deleted" });
};
