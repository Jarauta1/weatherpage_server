const express = require("express");
const router = express.Router();
const app = express();

app.use((req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Acces-Control-Allow-Headers",
        "Origin, X-Request-With, Content-Type, Accept"
    );
});

router.get("/", function (req,res) {

    fetch('https://influencity.s3.amazonaws.com/coding-test/almeria.json')
    .then((res)=>res.json())
    .then((data)=>{
        res.send({data: data})
     })
 
 })

 module.exports = router;