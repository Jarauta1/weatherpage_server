const express = require("express");
/* const MongoClient = require("mongodb").MongoClient; */
const cors = require("cors");
const fetch = require("node-fetch")

const app = express();
app.use(express.json());

let weather = require("./weather")

app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json())

/* let db; */

app.use((req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
})

app.use("/weather", weather)

app.listen(process.env.PORT || 3000);