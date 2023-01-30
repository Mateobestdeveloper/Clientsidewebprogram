var selectedExercise;
var logs = [];

function setCalorieValue(value) {
  selectedExercise = value; 
}

function validateMinutes(minutes) {
  if (isNaN(minutes) || minutes < 0) {
    document.getElementById("minutes").value = "";
  }
}

function addCalories() {
  let minutes = document.getElementById("minutes").value;
  if (!selectedExercise || isNaN(minutes) || minutes < 0) {
    document.getElementById("result").value = "Please select an exercise and enter a valid number of minutes.";
    return;
  }
  let calories = minutes * selectedExercise;
  let log = `${minutes} minutes of ${selectedExercise} calories burnt.`;
  logs.push(log);
  document.getElementById("result").value = log;
  document.getElementById("minutes").value = "";
  document.getElementById("logs").value = logs.join("\n");
}

 function mostBurnt() {
   if (!logs.length) {
     document.getElementById("result").value = "No logs found.";
     return;
   }
   let mostBurnt = 0;
   let mostBurntExercise;
   logs.forEach(log => {
     let calories = parseInt(log.split(" ")[0]) * parseInt(log.split(" ")[4]);
     if (calories > mostBurnt) {
       mostBurnt = calories;
       mostBurntExercise = log.split(" ")[4];
     }
   });
   document.getElementById("result").value = `${mostBurnt} calories burnt in ${mostBurntExercise}.`;
 }

 function mostBurnt() {
   let sitUpsTotal = logs.filter(log => log.includes("Sit-Ups")).reduce((acc, log) => acc + log.split(" ")[0], 0);
   let pushUpsTotal = logs.filter(log => log.includes("Push-Ups")).reduce((acc, log) => acc + log.split(" ")[0], 0);
   let jumpRopeTotal = logs.filter(log => log.includes("Jump-Rope")).reduce((acc, log) => acc + log.split(" ")[0], 0);

   let maxCaloriesBurned = Math.max(sitUpsTotal, pushUpsTotal, jumpRopeTotal);
   let exercise = "";

   if (maxCaloriesBurned === sitUpsTotal) {
     exercise = "Sit-Ups";
   } else if (maxCaloriesBurned === pushUpsTotal) {
     exercise = "Push-Ups";
   } else {
     exercise = "Jump-Rope";
   }

  document.getElementById("result").value = `Most calories burnt by ${exercise} with ${maxCaloriesBurned} calories`;
 }

 
function mostBurnt() {
  var sitUpsTotal = 0;
  var pushUpsTotal = 0;
  var jumpRopeTotal = 0;

  logs.forEach(log => {
    let logData = log.split(" ");
    let exercise = logData[3];
    let minutes = logData[0];
    let calories = 0;

    if (exercise === "Sit-Ups") {
      calories = 10 * minutes;
      sitUpsTotal += calories;
    } else if (exercise === "Push-Ups") {
      calories = 15 * minutes;
      pushUpsTotal += calories;
    } else if (exercise === "Jump-Rope") {
      calories = 18 * minutes;
      jumpRopeTotal += calories;
    }
  });

  let maxCaloriesBurned = Math.max(sitUpsTotal, pushUpsTotal, jumpRopeTotal);
  let exercise = "";

  if (maxCaloriesBurned === sitUpsTotal) {
    exercise = "Sit-Ups";
  } else if (maxCaloriesBurned === pushUpsTotal) {
    exercise = "Push-Ups";
  } else {
    exercise = "Jump-Rope";
  }

  document.getElementById("result").value = `${exercise} ${maxCaloriesBurned} calories burnt.`; 
  
}


function showAll() {
  if (!logs.length) {
    document.getElementById("result").value = "No logs found.";
    return;
  }
  var logsList = document.getElementById("logs");
  logsList.innerHTML = "";
  logs.forEach(log => {
    let li = document.createElement("li");
    li.innerText = log;
    logsList.appendChild(li);
  });
}
