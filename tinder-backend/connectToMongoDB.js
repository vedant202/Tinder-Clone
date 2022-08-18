// const {MongoClient} = require('mongodb').MongoClient
import {MongoClient} from 'mongodb';
var url = "mongodb://localhost:27017/vedantDB";

MongoClient.connect(url,(err,db)=>{  
    if(err){

        console.log(err);
        throw err;
    }
    let vDb = db.db("vedantDB");
    vDb.createCollection("Employees",(err,res)=>{
        if(err) throw err;
        console.log("Collection created");
        db.close();
    });

    console.log("Database is created");
})
