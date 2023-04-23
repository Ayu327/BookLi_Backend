const Book = require("../models/BookListSchema");
const mongoose = require("mongoose") ;

const getAllBooks = async (req, res, next) => {
    let books;
    try {
      books = await Book.find();
    } catch (err) {
      console.log(err);
    }
  
    if (!books) {
      return res.status(404).json({ message: "No products found" });
    }
    return res.status(200).json({ books });
  };
  
  const getById = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try {
      book = await Book.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (!book) {
      return res.status(404).json({ message: "No Book found" });
    }
    return res.status(200).json({ book });
  };
  
  const addBook = async (req, res, next) => {
    const {  title,author,name, genre, image } = req.body;
    let book;
    try {
      book = new Book({
        title,
        author,
        name,
        genre,
        image,
      });
      await book.save();
    } catch (err) {
      console.log(err);
    }
  
    if (!book) {
      return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ book });
  };
  
  const updateBook = async (req, res, next) => {
    const {title,author,name,genre,image} = req.body
    const {id} = req.params
    try{
        const books = await Book.findOneAndUpdate({_id:id},{title,author,name,genre,image})
        res.status(200).json(books)
    }catch(err){
        res.status(400).json({err:err.message})
    }
  };
  
  const deleteBook = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try {
      book = await Book.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
    }
    if (!book) {
      return res.status(404).json({ message: "Unable To Delete By this ID" });
    }
    return res.status(200).json({ message: "Product Successfully Deleted" });
  };

module.exports = {getAllBooks,getById,addBook, updateBook,deleteBook}