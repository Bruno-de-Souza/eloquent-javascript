const input = require('readline-sync');
let fuelLevel = 0, numAstronauts = 0, altitude = 0;

// Prompt for starting fuel level
while (fuelLevel <= 5000 || fuelLevel > 30000 || isNaN(fuelLevel)) {
    fuelLevel = parseFloat(input.question("Enter the starting fuel level (between 5000 and 30000): "));
}

// Prompt for number of astronauts
while (numAstronauts < 1 || numAstronauts > 7 || isNaN(numAstronauts)) {
    numAstronauts = parseInt(input.question("Enter the number of astronauts (1 to 7): "));
}

// Monitor fuel status and altitude
while (fuelLevel - 100 * numAstronauts >= 0) {
    altitude += 50;
    fuelLevel -= 100 * numAstronauts;
}

let output = `The shuttle gained an altitude of ${altitude} km.`;
if (altitude >= 2000) {
    output += " Orbit achieved!";
} else {
    output += " Failed to reach orbit.";
}

console.log(output);