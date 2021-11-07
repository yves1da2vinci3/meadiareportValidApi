import express from 'express'
import dotenv from 'dotenv'

let app = express()
const PORT = process.env.PORT || 5000;


app.get('/',(req,res)=>{
  res.send("yo it is just a test")
})

app.listen(PORT,(req,res) => {
    console.log('running on')
})