let classPath = "./../public/javascripts/classes.js";
const pageItem = require(classPath).pageItem;
var express = require('express');
var router = express.Router();

let viewAll = new pageItem("View All", "View all recipes currently on the website. Recipes are attributed to their author.", "/images/recipes/ramen.gif", "/recipes/all");
let submit = new pageItem("Submit", "Click the link to email me a recipe you want on the site.", "/images/cmlogo.jpg", "mailto:carlos.michael1997@gmail.com");


let items = [
  [viewAll, submit]
];

let category = "Recipes by CM and Family";
let description = "These are all the recipes I have either written or adapted from various places. If you want any recipes posted here, submit them with the link below. Recipes eventually will be password protected for whoever wants to store.";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('templates/projectpage.ejs', { css: "/stylesheets/recipesplash.css", category: category, active: "more", title: 'Recipes', description: description, items: items});
});
router.get('/all', function(req, res, next) {
  res.render('recipes/all.ejs', { css: "/stylesheets/recipesplash.css", category: category, active: "more", title: 'Recipes', description: description, items: items});
});
module.exports = router;
