var express = require("express");
var app = express();
var cors = require("cors");
var path = require("path");


const carData = [
    { "id": 1, "name": "sedan", "img_url": "cat_sedan.jpg" },        
    { "id": 2, "name": "concept","img_url": "cat_concept_car.jpg"},
    { "id": 3, "name": "sports", "img_url": "cat_sport.jpg" },       
    { "id": 4, "name": "suv", "img_url":"cat_suv.jpg" },
    { "id": 5, "name": "compact", "img_url":"cat_compact.jpeg "},   
    { "id": 6, "name": "pickup truck","img_url":"cat_pickup.avif" }
];
app.use(cors());
app.use("/images",express.static("./../client/src/assets/images/CatImg/"));

app.get("/api", (req, res) => {
  
    res.json(carData);
});

app.listen(3001, () => {
    console.log("My API is running...");
});


