const express = require("express");
const router = express.Router();
const app = express();

const fetch = require("node-fetch")

let average = 0

router.get("/average", function (req,res){
    average = 0
    fetch('https://influencity.s3.amazonaws.com/coding-test/almeria.json')
    .then((res)=>res.json())
    .then((data)=>{
        average += data.list[0].main.temp
        fetch('https://influencity.s3.amazonaws.com/coding-test/step_2_92398987243/cadiz.json')
        .then((res)=>res.json())
        .then((data)=>{
            average += data.list[0].main.temp
            fetch('https://influencity.s3.amazonaws.com/coding-test/step_2_92398987243/cordoba.json')
            .then((res)=>res.json())
            .then((data)=>{
                average += data.list[0].main.temp
                fetch('https://influencity.s3.amazonaws.com/coding-test/step_2_92398987243/granada.json')
                .then((res)=>res.json())
                .then((data)=>{
                    average += data.list[0].main.temp
                    fetch('https://influencity.s3.amazonaws.com/coding-test/step_2_92398987243/huelva.json')
                    .then((res)=>res.json())
                    .then((data)=>{
                        average += data.list[0].main.temp
                        fetch('https://influencity.s3.amazonaws.com/coding-test/step_2_92398987243/jaen.json')
                        .then((res)=>res.json())
                        .then((data)=>{
                            average += data.list[0].main.temp
                            fetch('https://influencity.s3.amazonaws.com/coding-test/step_2_92398987243/malaga.json')
                            .then((res)=>res.json())
                            .then((data)=>{
                                average += data.list[0].main.temp
                                fetch('https://influencity.s3.amazonaws.com/coding-test/step_2_92398987243/sevilla.json')
                                .then((res)=>res.json())
                                .then((data)=>{
                                    average += data.list[0].main.temp
                                    average = average/8
                                    average = average-273.15
                                    average = (average).toFixed(1)
                                    res.send({average: average})
                                })
                            })
                        })
                     })
                })
            })
        })
     })
})

router.get("/almeria", function (req,res) {

    fetch('https://influencity.s3.amazonaws.com/coding-test/almeria.json')
    .then((res)=>res.json())
    .then((data)=>{
        res.send({data: data})
     })
 
})

router.get("/cadiz", function (req,res) {

    fetch('https://influencity.s3.amazonaws.com/coding-test/step_2_92398987243/cadiz.json')
    .then((res)=>res.json())
    .then((data)=>{
        res.send({data: data})
     })
 
})

router.get("/cordoba", function (req,res) {

    fetch('https://influencity.s3.amazonaws.com/coding-test/step_2_92398987243/cordoba.json')
    .then((res)=>res.json())
    .then((data)=>{
        res.send({data: data})
     })
 
})

router.get("/granada", function (req,res) {

    fetch('https://influencity.s3.amazonaws.com/coding-test/step_2_92398987243/granada.json')
    .then((res)=>res.json())
    .then((data)=>{
        res.send({data: data})
     })
 
})

router.get("/huelva", function (req,res) {

    fetch('https://influencity.s3.amazonaws.com/coding-test/step_2_92398987243/huelva.json')
    .then((res)=>res.json())
    .then((data)=>{
        res.send({data: data})
     })
 
})

router.get("/jaen", function (req,res) {

    fetch('https://influencity.s3.amazonaws.com/coding-test/step_2_92398987243/jaen.json')
    .then((res)=>res.json())
    .then((data)=>{
        res.send({data: data})
     })
 
})

router.get("/malaga", function (req,res) {

    fetch('https://influencity.s3.amazonaws.com/coding-test/step_2_92398987243/malaga.json')
    .then((res)=>res.json())
    .then((data)=>{
        res.send({data: data})
     })
 
})

router.get("/sevilla", function (req,res) {

    fetch('https://influencity.s3.amazonaws.com/coding-test/step_2_92398987243/sevilla.json')
    .then((res)=>res.json())
    .then((data)=>{
        res.send({data: data})
     })
 
})

 module.exports = router;