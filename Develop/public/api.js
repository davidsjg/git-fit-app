const API = {
  //get the last workout from the DB
  async getLastWorkout() {
    let res;
    try {
      //is this just grabbing all workouts?  no id?  how is it the last workout?
      res = await fetch("/api/workouts");
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();

    //sorting the returned 
    return json[json.length - 1];
  },
  //update current workout 
  async addExercise(data) {
    //search the URL for =, split all URL digits into an array, push the 2nd(?) item in the array to id 
    const id = location.search.split("=")[1];

    //api call to grab the workout with the given id
    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },
  async createWorkout(data = {}) {
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  },

  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  },
};
