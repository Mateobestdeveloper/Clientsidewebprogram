let selectedExercise;
let logs = [];

function setCalorieValue(value) {
  selectedExercise = value;
}

function validateMinutes(minutes) {
  if (isNaN(minutes) || minutes < 0) {
    document.getElementById("minutes").value = "";
  }
}
let results = [];
let caloriesArray = [];
let excerciseArray = [];

function calculateCalories() {
  let minutes = document.getElementById("minutes").value;
  let exercise = document.querySelector('input[name="exercise"]:checked');
  let exerciseName = exercise.id;
  excerciseArray.push(exerciseName);
  let calories = exercise.value * minutes;
  caloriesArray.push(calories);
  let result = `Minutes: ${minutes} | Exercise: ${exerciseName} | Calories burnt: ${calories}`;
  results.push(result);
  console.log(results);
  console.log(caloriesArray);
  console.log(excerciseArray);
}

function mostBurnt() {
let maxCalories = Math.max(...caloriesArray);
let index = caloriesArray.indexOf(maxCalories);
let mostBurntExercise = excerciseArray[index];
document.getElementById("result").value = `${mostBurntExercise} with ${maxCalories} Calories.`
}

function showAll() {
  let list = "<ul>";
  for (let i = 0; i < results.length; i++) {
    list += "<li>" + results[i] + "</li>";
  }
  list += "</ul>";
  document.getElementById("logs").innerHTML = list;
}
