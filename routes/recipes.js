let classPath = "./../public/javascripts/classes.js";
const pageItem = require(classPath).pageItem;
var express = require('express');
var router = express.Router();

let gifs = [];
let path = "/images/projects/";
gifs.push(path + "out2.gif");
gifs.push(path + "out3.gif");

let kirby = new pageItem("Kirby", "A 2D Playable Prototype for a Cooking Game built in Unity.", "/images/projects/clarifyLogo.png", "#");
let spaceVR = new pageItem("Space Arrow", "A Unity 3D VR project where planetary bodies affect the gravity of a shot arrow.", "/images/projects/clarifyLogo.png", "#");


let items = [
  [kirby, spaceVR]
];
let category = "Recipes by Carlos-Michael";
let description = "Recipes written by Carlos-Michael.";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('templates/projectpage.ejs', { css: "/stylesheets/gamesplash.css", category: category, active: "more", title: 'Recipes', description: description, items: items});
});

module.exports = router;
