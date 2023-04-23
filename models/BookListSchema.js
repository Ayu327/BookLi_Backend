const mongoose = require("mongoose");
const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
      name: {
        type: String,
       
      },
     genre: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      }
},{timestamps:true})

module.exports = mongoose.model("Book",BookSchema)
