// A function that defines a square of a given number 

const square = function (x) {
    return x * x;
}

console.log(square(0.032));

// A function with no paramenters 

const makeANoise = function () {
    console.log("Hello World!");
}

makeANoise();

// A function with 2 paramenters 

const power = function (base, expoente) {
    let result = 1;

    for (let count = 0; count < expoente; count++) {
        result *= base
    }
    return result;
};

console.log(power(2, 10));

// Global bindings and Local bindings

let x = 10;

if (true) {
    let y = 20;
    var z = 30;
    console.log(x + y + z);
    // -> 60
}
// Y is not visible here
console.log(x + z);
// -> 40

// When multiples bindings have the same value, in that case, code can see the innermost one

const halve = function (n) {
    return n / 2;
};

let n = 10;

console.log(halve(100));
// -> 50
console.log(n);
// -> 10,

// Nested Scopes: blocks and functions can be created inside others block and functions, producing multiples degrees and locality

const hummus = function (factor) {
    const ingredient = function (amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "S";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas")
    ingredient(0.25, "cup", "tahini")
    ingredient(2, "tablespoon", "olive oil")
}

// Function as values

let launchMissiles = function () {
    missileSystem.launch("Now");
};
launchMissiles();

if (safeMode) {
    launchMissiles = function () {
        /* Do nothing */
    }
}

// Declaration Notation

console.log("The future says: ", future());

function future() {
    return "You'll never have flying cars";
}
// It does not matter the place of the function on the code, you can use it wherever you want to

// Arrow Functions =>

const powerI = (base, expoente) => {
    let result = 1;
    for (let count = 0; count < expoente; count++){
        result *= base;
    }
    return result;
}

const powerA = (x) => {
    return x;
}

// When there is just one paramanter, you can omit the parathenses in your function
const powerB = x => {
    return x;
}

// An arrown function with no paramenters
const horn = () => {
    console.log("Toot");
}

