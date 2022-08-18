import express from 'express'
import mongoose from 'mongoose'
import Cards from './dbCards.js'
import Cors from 'cors';

// App Config
const app = express();
const port = process.env.PORT || 8001 
// Middlewares
app.use(express.json());
app.use(Cors());
// DB Config
try{
    mongoose.connect('mongodb://localhost:27017/vedantDB')
}
catch(err){
    console.log(err);
}
// API Endpoints
app.get('/',(req,res)=>{
    res.status(200).send("Hello Programmers!!");
})

app.post('/tinder/cards',(req,res)=>{
    const dbCard = req.body;
    Cards.create(dbCard,(err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    })
})

app.get('/tinder/cards',(req,res)=>{
    Cards.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            console.log(data)
            res.status(200).send(data);
        }
    })
})
// Listner
app.listen(port,()=>console.log(`App is running on port ${port}`));