var express = require('express');
var router = express.Router();
let projectsJSON = require("./json/projectsIndex.json")
let projectsinfoJSON = require("./json/projects.json")


let projects = [[projectsJSON[0], projectsJSON[1]], [projectsJSON[2], projectsJSON[3]]];

let projectDescription = "While NYU's Computer Science program has exposed me to C, Java, Python and more, my experience in a variety of APIs through developing web apps and other projects makes me well-equipped as a developer to jump from framework to framework and deliver a quality product."

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('games/index', { active: "projects", title: 'Projects', description:projectDescription, games: projects});
});

router.get("/clarify", function(req, res, next)
{
  res.render("templates/item.ejs", {active: "projects", css: "/stylesheets/specialclarify.css", item: projectsinfoJSON[0], links: projectsinfoJSON[0].links, credits:" Developed by Elliot Winch, Jevons Wang, Bo Peng, Rachel Rub, and Carlos-Michael Rodriguez", images: projectsinfoJSON[0].images});
});

router.get("/nodepersonalsite", function(req, res, next)
{
  res.render("templates/item.ejs", {active: "projects", css: "/stylesheets/specialclarify.css", item: projectsinfoJSON[1], links: projectsinfoJSON[1].links, credits:" Developed by Carlos-Michael Rodriguez", images: projectsinfoJSON[1].images});
});

router.get("/assetpackages", function(req, res, next)
{
  res.render("templates/item.ejs", {active: "projects", css: "/stylesheets/gameinfo.css", item: projectsinfoJSON[2], links: projectsinfoJSON[2].links, credits:"Developed by Elliot Winch and Carlos-Michael Rodriguez", images: projectsinfoJSON[2].images});
});

module.exports = router;
