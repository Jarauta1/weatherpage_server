const express = require("express");
const router = express.Router();
const app = express();

const fetch = require("node-fetch")

let average = 0
let allInfo = {}
let generalMap = {}

router.get("/", function (req,res){
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

        allInfo.almeria = dataAlmeria;
        generalMap.almLat = allInfo.almeria.list[0].coord.lat
        generalMap.almLon = allInfo.almeria.list[0].coord.lon
        generalMap.almTemp = allInfo.almeria.list[0].main.temp
        average += allInfo.almeria.list[0].main.temp

        allInfo.granada = dataGranada;
        generalMap.graLat = allInfo.granada.list[0].coord.lat
        generalMap.graLon = allInfo.granada.list[0].coord.lon
        generalMap.graTemp = allInfo.granada.list[0].main.temp
        average += allInfo.granada.list[0].main.temp

        allInfo.malaga = dataMalaga;
        generalMap.malLat = allInfo.malaga.list[0].coord.lat
        generalMap.malLon = allInfo.malaga.list[0].coord.lon
        generalMap.malTemp = allInfo.malaga.list[0].main.temp
        average += allInfo.malaga.list[0].main.temp

        allInfo.jaen = dataJaen;
        generalMap.jaeLat = allInfo.jaen.list[0].coord.lat
        generalMap.jaeLon = allInfo.jaen.list[0].coord.lon
        generalMap.jaeTemp = allInfo.jaen.list[0].main.temp
        average += allInfo.jaen.list[0].main.temp

        allInfo.cordoba = dataCordoba;
        generalMap.corLat = allInfo.cordoba.list[0].coord.lat
        generalMap.corLon = allInfo.cordoba.list[0].coord.lon
        generalMap.corTemp = allInfo.cordoba.list[0].main.temp
        average += allInfo.cordoba.list[0].main.temp

        allInfo.sevilla = dataSevilla;
        generalMap.sevLat = allInfo.sevilla.list[0].coord.lat
        generalMap.sevLon = allInfo.sevilla.list[0].coord.lon
        generalMap.sevTemp = allInfo.sevilla.list[0].main.temp
        average += allInfo.sevilla.list[0].main.temp

        allInfo.huelva = dataHuelva;
        generalMap.hueLat = allInfo.huelva.list[0].coord.lat
        generalMap.hueLon = allInfo.huelva.list[0].coord.lon
        generalMap.hueTemp = allInfo.huelva.list[0].main.temp
        average += allInfo.huelva.list[0].main.temp

        allInfo.cadiz = dataCadiz;
        generalMap.cadLat = allInfo.cadiz.list[0].coord.lat
        generalMap.cadLon = allInfo.cadiz.list[0].coord.lon
        generalMap.cadTemp = allInfo.cadiz.list[0].main.temp
        average += allInfo.cadiz.list[0].main.temp

        average = average/8
        average = average-273.15
        average = (average).toFixed(2)

        return [allInfo,generalMap,average]
      })
      .then((data) => {
          
        res.send({data:data[0], generalMap: data[1], average: data[2]})
    
      }).catch((err) => {
        console.log(err);
      });
})

/* Individual routes */

/* async function getData(url) {
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
}) */

 module.exports = router;