var express = require('express');
var router = express.Router();

class project
{
  constructor(title, description, path, link)
  {
    this.title = title;
    this.description = description;
    this.img = path;
    this.link = link;
  }
}

let projects = [];
projects.push(new project("Clarify", "This presentation app won top prize at HackNYU 2018. It is currently in development.", "/images/projects/clarifyLogo.png", "#"));
projects.push(new project("AR Museum", "An AR application for enhancing historical exhibits at a museum.", "/images/cmlogo.jpg", "/projects/ARFinal"));
let gifs = [];
let path = "/images/projects/";
gifs.push(path + "out2.gif");
gifs.push(path + "out3.gif");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('projects/index', { active: "projects", title: 'Projects', description: "While NYU's Computer Science program has exposed me to C, Java, Python and more, my experience in a variety of APIs through developing web apps and other projects makes me well-equipped as a developer to jump from framework to framework and deliver a quality product.", projects: projects});
});

class item
{
  constructor(name, coverURL, sections)
  {
    this.name = name;
    this.coverURL = coverURL;
    this.sections = sections;
  }
}

class section
{
  constructor(title, description, list)
  {
    this.title = title;
    this.description = description;
    this.list = list;
  }
}

class link
{
  constructor(type, description, link)
  {
    this.type = type;
    this.description = description;
    this.link = link;
  }
}

class img
{
  constructor(path, topCaption, bottomCaption, active)
  {
    this.path = path;
    this.topCaption = topCaption;
    this.bottomCaption = bottomCaption;
    this.active = active;
  }
}
router.get("/ARFinal", function(req, res, next)
{
  res.render("templates/item.ejs", {active: "projects", item: null, links: null, credits:"Programming, Art, Animation, and Design by Carlos-Michael Rodriguez", images: null});
});

module.exports = router;
