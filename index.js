const express = require("express");
/* const MongoClient = require("mongodb").MongoClient; */
const app = express();
const cors = require("cors");
const fetch = require("node-fetch")

let weather = require("./weather")

app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json())


/* let db; */

/* app.use((req,res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
});
 */
/* app.get("/weather", function (req,res) {

    fetch('https://influencity.s3.amazonaws.com/coding-test/almeria.json')
    .then((res)=>res.json())
    .then((data)=>{
        res.send({data: data})
     })
 
 }) */

app.use("/weather", weather)

app.listen(process.env.PORT || 3001);