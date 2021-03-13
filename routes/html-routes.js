const router = require("express").Router();
const path = require('path');

module.exports = (app) => {
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, "index.html")))
  ;
  app.get('/post', (req, res) =>
    res.render("post")
  );
  app.get('/search', (req, res) =>
    res.render("search")
  );
}
