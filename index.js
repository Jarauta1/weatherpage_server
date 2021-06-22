const express = require("express");

const app = express();
const cors = require("cors");
const fetch = require("node-fetch")

let weather = require("./weather")

app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json())

app.use("/weather", weather)

app.listen(process.env.PORT || 3001);