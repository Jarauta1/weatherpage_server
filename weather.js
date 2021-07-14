const express = require("express");
const router = express.Router();
const app = express();

const fetch = require("node-fetch")

async function getData(url) {
    const res = await fetch(url)
    const data = await res.json()
    return data 
}

router.get("/almeria", function (req,res) {
    getData("https://influencity.s3.amazonaws.com/coding-test/almeria.json").then(data =>res.send({data:data})) 
})

router.get("/cadiz", function (req,res) {
    getData("https://influencity.s3.amazonaws.com/coding-test/step_2_92398987243/cadiz.json").then(data =>res.send({data:data})) 
})

router.get("/cordoba", function (req,res) {
    getData("https://influencity.s3.amazonaws.com/coding-test/step_2_92398987243/cordoba.json").then(data =>res.send({data:data}))
})

router.get("/granada", function (req,res) {
    getData("https://influencity.s3.amazonaws.com/coding-test/step_2_92398987243/granada.json").then(data =>res.send({data:data}))
})

router.get("/huelva", function (req,res) {
    getData("https://influencity.s3.amazonaws.com/coding-test/step_2_92398987243/huelva.json").then(data =>res.send({data:data}))
})

router.get("/jaen", function (req,res) {
    getData("https://influencity.s3.amazonaws.com/coding-test/step_2_92398987243/jaen.json").then(data =>res.send({data:data}))
})

router.get("/malaga", function (req,res) {
    getData("https://influencity.s3.amazonaws.com/coding-test/step_2_92398987243/malaga.json").then(data =>res.send({data:data}))
})

router.get("/sevilla", function (req,res) {
    getData("https://influencity.s3.amazonaws.com/coding-test/step_2_92398987243/sevilla.json").then(data =>res.send({data:data}))
})

let average = 0
let allInfo = {}

router.get("/average", function (req,res){
    Promise.all([
        fetch('https://influencity.s3.amazonaws.com/coding-test/almeria.json'),
        fetch('https://influencity.s3.amazonaws.com/coding-test/step_2_92398987243/granada.json'),
        fetch('https://influencity.s3.amazonaws.com/coding-test/step_2_92398987243/malaga.json'),
        fetch('https://influencity.s3.amazonaws.com/coding-test/step_2_92398987243/jaen.json'),
        fetch('https://influencity.s3.amazonaws.com/coding-test/step_2_92398987243/cordoba.json'),
        fetch('https://influencity.s3.amazonaws.com/coding-test/step_2_92398987243/sevilla.json'),
        fetch('https://influencity.s3.amazonaws.com/coding-test/step_2_92398987243/huelva.json'),
        fetch('https://influencity.s3.amazonaws.com/coding-test/step_2_92398987243/cadiz.json'),
      ]).then(async([almeria, granada, malaga, jaen, cordoba, sevilla, huelva, cadiz]) => {
        const dataAlmeria = await almeria.json();
        const dataGranada = await granada.json();
        const dataMalaga = await malaga.json();
        const dataJaen = await jaen.json();
        const dataCordoba = await cordoba.json();
        const dataSevilla = await sevilla.json();
        const dataHuelva = await huelva.json();
        const dataCadiz = await cadiz.json();
        allInfo.almeria = dataAlmeria.list;
        allInfo.granada = dataGranada.list;
        allInfo.malaga = dataMalaga.list;
        allInfo.jaen = dataJaen.list;
        allInfo.cordoba = dataCordoba.list;
        allInfo.sevilla = dataSevilla.list;
        allInfo.huelva = dataHuelva.list;
        allInfo.cadiz = dataCadiz.list;
        return [allInfo]
      })
      .then((allInfo) => {
          
        res.send({data:allInfo})
    
      }).catch((err) => {
        console.log(err);
      });
    /* fetch('https://influencity.s3.amazonaws.com/coding-test/almeria.json')
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
     }) */
})

 module.exports = router;