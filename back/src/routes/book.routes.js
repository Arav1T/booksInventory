const express = require("express");
const router = express.Router();
const controller = require("../controllers/book.controller");

router.post("/", controller.createBook);
router.get("/", controller.getAllBooks);
router.get("/:id", controller.getBookById);
router.put("/:id", controller.updateBook);
router.delete("/:id", controller.deleteBook);

module.exports = router;
