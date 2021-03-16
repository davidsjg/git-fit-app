# git-fit-app
Application for tracking daily workouts and exercises.

Title: Git Fit Application

Introduction: The goal of this refactor is to create a fitness tracker application that allows the user to track their daily workouts and exercises.  The user can continue from a previous workout, or create a new workout.  

Technologies: HTML, JavaScript, JQuery, .CSS, Mongo, Mongoose

Launch: When the user arrives at the home page, no action is taken until they select their frist route.  From there, the user can select to continue a most recent workout, create a new workout, or view statistics for their previous 7 workouts.

Scope of Functionalities: API were added to allow the user to navigate between the three front-end pages.  HTML routes for these front-end pages were also added.  A model was created to fit the type of workout that the user can enter.  When the user selects a new workout, the model is utilized and the date is logged.  From there, the user is able to add cardio or strength training exercises to an array, which is the value of the key-value pair of the key 'exercise' on the model.  If the user would like to see their data displayed in chart form for the previous seven days, the user can click on 'Dashboard' and they will be routed there.  

Problems Faced: Getting heroku to launch with Mongo was a new challenge. 

Potential Future Plans: Have a way to document your progress.  Set goals.  Have it link to social media.  


Additional Notes: The final author of this is Joey davidson. He can be reached at j.davidson18@gmail.com

WEBSITE:
https://nameless-mesa-48996.herokuapp.com/
