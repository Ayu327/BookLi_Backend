const express = require("express");
const router = express.Router()
const {getAllBooks,getById,addBook,updateBook,deleteBook} = require('../controller/BookController')
const Book = require("../models/BookListSchema");


router.get("/",getAllBooks)

router.post("/",addBook)

router.get("/:id",getById)

router.patch("/:id",updateBook)

router.delete("/:id",deleteBook)

module.exports = router ;

//mongoone84
//YahpSU5qk4PDZHbl