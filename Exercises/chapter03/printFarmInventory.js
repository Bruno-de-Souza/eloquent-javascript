/* First approach!
function printFarmInventory (cowns, chickens) {
    let cowsString = String(cowns);
    while (cowsString.length < 3) {
        cowsString = '0' + cowsString;
    }
    console.log(`${cowsString} Cows`);
    let chickensString = String(chickens);
    while (chickensString.length < 3) {
        chickensString = '0' + chickensString;
    }
    console.log(`${chickensString} Chickens`);
}
printFarmInventory(5, 1);
*/

//Adding one more animal to count!!! Second approach!
function ZeroPad(number, label) {
    let numberString = String(number);
    while (numberString.length < 3 ) {
        numberString = '0' + numberString;
    }
    console.log(`${numberString} ${label}`);
}

function printFarmInventory(cowns, chickens, pigs) {
    ZeroPad(cowns, 'Cows');
    ZeroPad(chickens, 'Chickens');
    ZeroPad(pigs, 'Pigs');
}

printFarmInventory(0, 5, 10);