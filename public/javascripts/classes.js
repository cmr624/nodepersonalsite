class game
{
  constructor(title, description, path, link)
  {
    this.title = title;
    this.description = description;
    this.img = path;
    this.link = link;
  }
}

class pageItem
{
  constructor(title, description, path, link)
  {
    this.title = title;
    this.description = description;
    this.img = path;
    this.link = link;
  }
}

class recipeSplash
{
  constructor(title, password, path, link)
  {
    this.title = title;
    this.password = password;
    this.img = path;
    this.link = link;
  }
}

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

module.exports = {
  game: game,
  pageItem: pageItem,
  item: item,
  section: section,
  link: link,
  img: img,
  recipeSplash: recipeSplash
};
