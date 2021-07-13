const express = require("express");
const router = express.Router();
const app = express();

const fetch = require("node-fetch")

async function getData(city) {
    const res = await fetch(`https://influencity.s3.amazonaws.com/coding-test/${city}.json`)
    const data = await res.json()
    return data 
}

router.get("/almeria", function (req,res) {
    getData("almeria").then(data =>res.send({data:data})) 
})

router.get("/cadiz", function (req,res) {
    getData("cadiz").then(data =>res.send({data:data})) 
})

router.get("/cordoba", function (req,res) {
    getData("cordoba").then(data =>res.send({data:data}))
})

router.get("/granada", function (req,res) {
    getData("granada").then(data =>res.send({data:data}))
})

router.get("/huelva", function (req,res) {
    getData("huelva").then(data =>res.send({data:data}))
})

router.get("/jaen", function (req,res) {
    getData("jaen").then(data =>res.send({data:data}))
})

router.get("/malaga", function (req,res) {
    getData("malaga").then(data =>res.send({data:data}))
})

router.get("/sevilla", function (req,res) {
    getData("sevilla").then(data =>res.send({data:data}))
})

let average = 0
let cityInfo = {}

router.get("/average", function (req,res){
    
    fetch('https://influencity.s3.amazonaws.com/coding-test/almeria.json')
    .then((res)=>res.json())
    .then((data)=>{
        average += data.list[0].main.temp
        cityInfo.almLat = data.list[0].coord.lat
        cityInfo.almLon = data.list[0].coord.lon
        cityInfo.almTemp = data.list[0].main.temp
        fetch('https://influencity.s3.amazonaws.com/coding-test/step_2_92398987243/cadiz.json')
        .then((res)=>res.json())
        .then((data)=>{
            average += data.list[0].main.temp
            cityInfo.cadLat = data.list[0].coord.lat
            cityInfo.cadLon = data.list[0].coord.lon
            cityInfo.cadTemp = data.list[0].main.temp
            fetch('https://influencity.s3.amazonaws.com/coding-test/step_2_92398987243/cordoba.json')
            .then((res)=>res.json())
            .then((data)=>{
                average += data.list[0].main.temp
                cityInfo.corLat = data.list[0].coord.lat
                cityInfo.corLon = data.list[0].coord.lon
                cityInfo.corTemp = data.list[0].main.temp
                fetch('https://influencity.s3.amazonaws.com/coding-test/step_2_92398987243/granada.json')
                .then((res)=>res.json())
                .then((data)=>{
                    average += data.list[0].main.temp
                    cityInfo.graLat = data.list[0].coord.lat
                    cityInfo.graLon = data.list[0].coord.lon
                    cityInfo.graTemp = data.list[0].main.temp
                    fetch('https://influencity.s3.amazonaws.com/coding-test/step_2_92398987243/huelva.json')
                    .then((res)=>res.json())
                    .then((data)=>{
                        average += data.list[0].main.temp
                        cityInfo.hueLat = data.list[0].coord.lat
                        cityInfo.hueLon = data.list[0].coord.lon
                        cityInfo.hueTemp = data.list[0].main.temp
                        fetch('https://influencity.s3.amazonaws.com/coding-test/step_2_92398987243/jaen.json')
                        .then((res)=>res.json())
                        .then((data)=>{
                            average += data.list[0].main.temp
                            cityInfo.jaeLat = data.list[0].coord.lat
                            cityInfo.jaeLon = data.list[0].coord.lon
                            cityInfo.jaeTemp = data.list[0].main.temp
                            fetch('https://influencity.s3.amazonaws.com/coding-test/step_2_92398987243/malaga.json')
                            .then((res)=>res.json())
                            .then((data)=>{
                                average += data.list[0].main.temp
                                cityInfo.malLat = data.list[0].coord.lat
                                cityInfo.malLon = data.list[0].coord.lon
                                cityInfo.malTemp = data.list[0].main.temp
                                fetch('https://influencity.s3.amazonaws.com/coding-test/step_2_92398987243/sevilla.json')
                                .then((res)=>res.json())
                                .then((data)=>{
                                    average += data.list[0].main.temp
                                    average = average/8
                                    average = average-273.15
                                    average = (average).toFixed(1)
                                    cityInfo.sevLat = data.list[0].coord.lat
                                    cityInfo.sevLon = data.list[0].coord.lon
                                    cityInfo.sevTemp = data.list[0].main.temp
                                    res.send({average: average, cityInfo: cityInfo})
                                })
                            })
                        })
                     })
                })
            })
        })
     })
})

 module.exports = router;