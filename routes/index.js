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
images.push(new img("/images/cmlogo.jpg", null, null, "active"));
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { active: "home", images: images });
});

router.get('/contact', function(req, res, next) {
  res.render('contact.ejs', { active: "home", images: images });
});

module.exports = router;

/*
    i x
x = 0 0 - black
x = 0 1 - white
x = 1 0 - white
x = 1 1 - black
x = 2 0 - black
x = 2 1 - white
x = 3 0 - white
x = 3 1 - black
x = 4 0 - black
x = 4 1 - white


all black is if i and x are both even or both odd
all white is if i and x are different modular
*/
