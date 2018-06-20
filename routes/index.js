var express = require('express');
var router = express.Router();
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

let images = [];
images.push(new img("/images/projects/clarifyMockUp.gif", "Clarify Mockup", "Developed for HackNYU 2018", "active"));
images.push(new img("/images/projects/kitchengif480speedup.gif", "Kitchen Prototype", "Developed for Intro to Games Development", null));
images.push(new img("/images/projects/youup-ggjam.gif", "You Up?", "Developed for Global Game Jam 2018", null));



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { images: images });
});

module.exports = router;
