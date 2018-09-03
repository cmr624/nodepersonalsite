let classPath = "./../public/javascripts/classes.js";
let gamesJSON = require("./json/gamesIndex.json");
let gamesInfoJSON = require("./json/games.json");
const game = require(classPath).game;
const item = require(classPath).item;
const section = require(classPath).section;
const link = require(classPath).link;
const img = require(classPath).img;
var express = require('express');
var router = express.Router();
let games = [
  [gamesJSON[0], gamesJSON[1]],
  [gamesJSON[2], gamesJSON[3]]
];

let gifs = [];
let path = "/images/games/";
gifs.push(path + "out2.gif");
gifs.push(path + "out3.gif");

let description = "With my minor in Game Design and access to the NYU Game Center, I have been able to use my programming and design skills to make interesting and creative interactive experiences. My portfolio of games demonstrates my ability to build and design a variety of types of experiences in different programming languages and development environments, including Unity 2D, Unity VR, Javascript, web-based AR and more.";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('games/index', { active: "games", title: 'Games', description: description, games: games});
});

let kitchenCredits = "Programming, Art, Animation, and Design by Carlos-Michael Rodriguez";
let vrCredits = "Programming, Art, and Design by Nina Demirjian, Elliot Winch, Nesma Belkhodja, and Carlos-Michael Rodriguez";
let kirbyCredits = "Developed by Carlos-Michael Rodriguez, Jevons Wang, and Nicole Wang";
let youupcredits="Developed by Nina Demirjian, Elliot Winch, and Carlos-Michael Rodriguez";
let deadtosightscredits = "Developed by Nina Demirjian, Noah Lee, Sean Porio, Carlos-Michael Rodriguez, and Elliot Winch";
let boomerangcredits = "Developed by Carlos-Michael Rodriguez.";
router.get("/kitchenprototype", function(req, res, next)
{
  res.render("templates/item.ejs", {active: "games", css: "/stylesheets/gameinfo.css", item: gamesInfoJSON[0], links: gamesInfoJSON[0].links, credits:kitchenCredits, images: gamesInfoJSON[0].images});
});
router.get("/spaceVR", function(req, res, next)
{
  res.render("templates/item.ejs", {active: "games", css: "/stylesheets/gameinfo.css", item: gamesInfoJSON[1], links: gamesInfoJSON[1].links, credits:vrCredits, images: gamesInfoJSON[1].images});
});
router.get("/kirby", function(req, res, next)
{
  res.render("templates/item.ejs", {active: "games", css: "/stylesheets/gameinfo.css", item: gamesInfoJSON[2], links: gamesInfoJSON[2].links, credits:kirbyCredits, images: gamesInfoJSON[2].images});
});
router.get("/youup", function(req, res, next)
{
  res.render("templates/item.ejs", {active: "games", css: "/stylesheets/specialyouup.css", item: gamesInfoJSON[3], links: gamesInfoJSON[3].links, credits:youupcredits, images: gamesInfoJSON[3].images});
});
router.get("/deadtosights", function(req, res, next)
{
  res.render("templates/item.ejs", {active: "games", css: "/stylesheets/specialyouup.css", item: gamesInfoJSON[4], links: gamesInfoJSON[4].links, credits:deadtosightscredits, images: gamesInfoJSON[4].images});
});
router.get("/boomerangshooter", function(req, res, next)
{
  res.render("templates/item.ejs", {active: "games", css: "/stylesheets/specialyouup.css", item: gamesInfoJSON[5], links: gamesInfoJSON[5].links, credits:boomerangcredits, images: gamesInfoJSON[5].images});
});
module.exports = router;
