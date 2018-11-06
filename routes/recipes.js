let classPath = "./../public/javascripts/classes.js";
const pageItem = require(classPath).pageItem;
const recipeSplash = require(classPath).recipeSplash;
var express = require('express');
var router = express.Router();
var basicAuth = require('basic-auth');

let recipesJSON = require("./json/recipes.json");

let viewAll = new pageItem("View All", "View all recipes currently on the website. Recipes are attributed to their author.", "/images/recipes/ramen.gif", "/recipes/all");
let submit = new pageItem("Submit", "Click the link to email me a recipe you want on the site.", "/images/cmlogo.jpg", "mailto:carlos.michael1997@gmail.com");


let items = [
  [viewAll, submit]
];

let chickenParm = new recipeSplash("chickenParm", null, "/images/recipes/chicken-parm.jpg", "/recipes/chicken-parm");
let kaleCaesar = new recipeSplash("AUTHENTICATE ME", "password", "/images/recipes/chicken-parm.jpg", "/recipes/test");
let nuggets = new recipeSplash("chickenParm", "password", "/images/recipes/chicken-parm.jpg", "/recipes/chicken-parm");
let steak = new recipeSplash("chickenParm", "password", "/images/recipes/chicken-parm.jpg", "/recipes/chicken-parm");

let recipes = [];
for (let i = 0; i < recipesJSON.length / 3; i++){
    let tmp = [];
    for (let x = 0; x < 3; x++){

      tmp.push(recipesJSON[x + i]);
    }
    recipes.push(tmp);
}

let category = "Recipes by CM and Family";
let description = "These are all the recipes I have either written or adapted from various places. If you want any recipes posted here, submit them with the link below. Recipes eventually will be password protected for whoever wants to store.";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('templates/projectpage.ejs', { css: "/stylesheets/recipesplash.css", category: category, active: "more", title: 'Recipes', description: description, items: items});
});
router.get('/all', function(req, res, next) {
  res.render('recipes/all.ejs', { css: "/stylesheets/recipesplash.css", category: category, active: "more", title: 'Recipes', description: description, items: recipes});
});

for (let i = 0; i < recipes.length; i++){
  for (let x = 0; x < recipes[i].length; x++) {
    let authApp = null;
    if (recipes[i][x].auth !== null) {
      authApp = function (req, res, next) {
        var user = basicAuth(req);
        if (!user || !user.name || !user.pass) {
          res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
          res.sendStatus(401);
          return;
        }
        if (user.name === recipes[i][x].auth.username && user.pass === recipes[i][x].auth.password) {
          next();
        }
        else
        {
          res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
          res.sendStatus(401);
          return;
        }
      };
    }
    if (authApp === null){
      router.get(recipes[i][x].directLink, function(req, res, next){
        console.log("should render nuggets 1 / 2");
        res.render("recipes/template.ejs", {css: "/stylesheets/recipe.css", category: category, active: "more", coverURL: recipes[i][x].image, recipe: recipes[i][x]});
      });
    }
    else {
      router.get(recipes[i][x].directLink, authApp, function(req, res, next){
        console.log("should render nuggets spicy");
        res.render("recipes/template.ejs", {css: "/stylesheets/recipe.css", category: category, active: "more", coverURL: recipes[i][x].image, recipe: recipes[i][x]});
      });
    }
  }
}
/*router.get('/test', auth, function(req, res, next){
  res.render('recipes/template.ejs', { css: "/stylesheets/recipe.css", category: category, active: "more", coverURL: "/images/recipes/nuggets.jpg", recipe: recipesJSON[0]});
});*/

module.exports = router;
/*
var express = require("express");
var app = express();
var basicAuth = require('basic-auth');

var auth = function (req, res, next) {
  var user = basicAuth(req);
  if (!user || !user.name || !user.pass) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    res.sendStatus(401);
    return;
  }
  if (user.name === 'amy' && user.pass === 'passwd123') {
    next();
  } else {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    res.sendStatus(401);
    return;
  }
}

app.get("/auth", auth, function (req, res) {
    res.send("This page is authenticated!")
});

app.listen(3030);
console.log("app running on localhost:3030");*/
