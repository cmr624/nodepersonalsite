let classPath = "./../public/javascripts/classes.js";
let gamesJSON = require("./json/gamesIndex.json");
const game = require(classPath).game;
const item = require(classPath).item;
const section = require(classPath).section;
const link = require(classPath).link;
const img = require(classPath).img;
var express = require('express');
var router = express.Router();

let kirby = new game("Kirby & the Amazing Burgers", "A 2D Playable Prototype for a Cooking Game built in Unity.", "/images/projects/clarifyLogo.png", "#");
let spaceVR = new game("Space Arrow - VR", "A Unity 3D VR project where planetary bodies affect the gravity of a shot arrow.", "/images/projects/clarifyLogo.png", "#");
let kitchenGame = new game("The Kitchen", "A 2D Playable Prototype for a Cooking Game built in Unity.", "/images/projects/kitchengif480speedup.gif", "/games/kitchenprototype");
let youUp = new game("You Up?", "A mobile text adventure game currently being developed for iOS.", "/images/projects/clarifyLogo.png", "#");

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

let kitchenSections = [];
kitchenSections.push(new section("Project Description", 'A semester long-project in "Introduction to Game Development" taken at the NYU Game Center. The assignment was to produce a fully playable Prototype in Unity 2D by the end of the semester.'));
let skillsList = ["Scoping a Prototype", "Basic 2D Pixelart Animation and Art Generation", "Unity 2D Animation Timing", "Unity 2D Classes in C#"];
kitchenSections.push(new section("Skills Learned", null, skillsList))
let kitchen = new item("The Kitchen", path + "kitchengif480speedup.gif", kitchenSections);

let kitchenLinks = [];
kitchenLinks.push(new link("fa fa-github", "Project Repository", "https://github.com/cmr624/kitchen_prototype"));
kitchenLinks.push(new link("fa fa-gamepad", "Play now!", "https://cmr624.itch.io/kitchen-assignment-3"));

let kitchenImages = [];
kitchenImages.push(new img("/images/games/kitchengif480speedup.gif", "Kitchen Prototype", "Developed for Intro to Games Development", "active"));

let kitchenCredits = "Programming, Art, Animation, and Design by Carlos-Michael Rodriguez";

router.get("/kitchenprototype", function(req, res, next)
{
  res.render("templates/item.ejs", {active: "games", css: "/stylesheets/gamesplash.css", item: kitchen, links: kitchenLinks, credits:kitchenCredits, images: kitchenImages});
});

module.exports = router;
