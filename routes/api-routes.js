const router = require("express").Router();
const Workout = require("../models/index.js");

router.get("/api/?id", (req, res) => {
  //somehow have to get the ID of the last workout entered and populate it 

  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//aren't we doing a get 
router.post("/api/exercise?id", (req, res) => {
  //where is it grabbing Workout from?
  //workout is a model required in  
  Workout.insertMany(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get("/api/stats", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;

router.post("/api/tr", ({ body }, res) => {
  Transaction.insertMany(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});