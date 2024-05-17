for (let num = 1; num <= 35; num ++){
    let output = ''; 
    if (num % 3 == 0) output += 'Fizz';
    if (num % 5 == 0) output += 'Buzz';

    console.log(output || num);
}