const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const wourkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: {
    type: Array,
  }
})

const Workout = mongoose.model("Workout", wourkoutSchema);

module.exports = Workout;
