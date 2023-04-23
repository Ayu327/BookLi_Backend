const express = require("express");
const app = express()
require("dotenv").config();
const mongoose = require("mongoose");
// const cors = require('cors');
// app.use(cors());
const bodyparser = require("body-parser");



 const router = require('./Routes/route')
app.use(express.json())
app.use("/books",router)


const UserRoutes = require("./Routes/userRoutes");
app.use("/user", UserRoutes);


mongoose.connect(process.env.MONGODB_URL).then(
    ()=>{
        console.log("succesfully connected to db")
    }
).catch(
    (err)=>{
        console.log(err)
    }
)

app.use(bodyparser.json());

app.listen(4000,()=>{
    console.log("port running on 4000")
})
