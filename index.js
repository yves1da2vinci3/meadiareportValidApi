import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
let app = express()
const PORT = process.env.PORT || 5000;

// importation des routes
import UserRoutes from './routes/userRoutes.js';
import ArticlesRoutes from './routes/articlesRoutes.js'

// connection a la  db
dotenv.config()
const connectToMongo = async() => {
  await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  });
  return mongoose;
};
await connectToMongo().then(async() => console.log('connected TO MONGO DataBase'));
// apply des mmiddlewares
app.use(cors({origin:"*"}))
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

// Routage 

app.get('/',(req,res)=>{
  res.send("yo it is just a test")
})

app.use('/api/users',UserRoutes)
app.use('/api/articles',ArticlesRoutes)


app.listen(PORT,(req,res) => {
    console.log('running on')
})