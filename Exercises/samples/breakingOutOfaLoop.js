for (let current = 20; ; current = current + 1) {
    if (current % 7 == 0) {
        console.log(current);
        break;
    }
}

for (let number = 0; number <= 5; number += 1) {
    console.log(`# ${number}`);
}

let weather = 'rainy';

switch (console.log(`The todays's weather is: ` + weather)) {
    case 'rainy':
        console.log('Remember to bring an umbrella!')
        break;
    case 'sunny':
        console.log('Do not forget to use the sun scream!'); 
    default:
        break;
}