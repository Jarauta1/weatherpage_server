const express = require("express");
/* const MongoClient = require("mongodb").MongoClient; */
const cors = require("cors");
const fetch = require("node-fetch")

const app = express();
app.use(express.json());

let db;

app.use(cors());

app.get("/weather", function (req,res) {

   fetch('https://influencity.s3.amazonaws.com/coding-test/almeria.json')
   .then((res)=>res.json())
   .then((data)=>{
       if (data.cod == 200) {
           res.send({message: data.message, data: data})
       }
       else {
           res.send({code: data.cod, error: data.message})
       }
    })

})

app.listen(3001);