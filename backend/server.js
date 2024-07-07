const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const UploadRouter = require('./routes/UploadRoute')

const app= express();
app.use(cors());
app.use(express.json())
app.use(express.static("public"))


const PORT= process.env.PORT || 6000

app.use(UploadRouter)

mongoose.connect(process.env.MONGODB_URL)
.then (()=>{console.log("MongoDB is connected...")})
.catch((err)=>console.log(err))


app.listen(PORT, ()=>{
    console.log(`Server started at port : ${PORT}`)
})
