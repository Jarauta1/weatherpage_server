const express = require("express");
const router = express.Router();
const app = express();

const fetch = require("node-fetch")

router.get("/", function (req,res) {

    fetch('https://influencity.s3.amazonaws.com/coding-test/almeria.json')
    .then((res)=>res.json())
    .then((data)=>{
        res.send({data: data})
     })
 
 })

 module.exports = router;