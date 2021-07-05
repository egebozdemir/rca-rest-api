const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')



const app = express()
const port = 3000

var connection = mongoose.connect('mongodb://root:XJSVuHHAbDpxursEnUPQ@10.10.102.1:27017/control-system?authSource=admin', {useNewUrlParser: true,useUnifiedTopology:true},()=>{
  console.log("Connection established")
})



app.use(morgan("dev"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());


const AuthRouter = require('./src/Routes/Auth')
const CardRouter = require('./src/Routes/Cards')

app.use('/auth',AuthRouter)
app.use('/cards',CardRouter)



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})