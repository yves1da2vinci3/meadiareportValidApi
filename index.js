import express from 'express'

let app = express()



app.get('/',(req,res)=>{
  res.send("yo it is just a test")
})

app.listen(3000,(req,res) => {
    console.log('running on')
})