prompt("Hello Everyone!, Please click 'enter' to continue")
let theNumber = Number(prompt("Pick a Number"));
if (!Number.isNaN(theNumber)) {
    console.log("Your number is the square root of " + theNumber * theNumber);
    alert("Your number is the square root of " + theNumber * theNumber);
} else {
    alert("This is not a number!");
};