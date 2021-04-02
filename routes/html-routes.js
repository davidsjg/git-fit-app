// html-routes.js - this file offers a set of routes for sending users to the various html pages

// Dependencies
const path = require("path");

const router = require("express").Router();

// Routes

// Each of the below routes just handles the HTML page that the user gets sent to.

// Index route loads view.html
// router.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '../public/index.html'))
// );

// Add route loads the add.html page,
// Where users can enter new characters to the db
router.get("/stats", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/stats.html"))
);

// All route loads the all.html page,
// Where all characters in the db are displayed
router.get("/exercise", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/exercise.html"))
);

module.exports = router;
