//?First, extract the logic in the if block and wrap it in a separate function.
//?Second, pass the function to the filter() function as an argument.

function isOdd(number){
    console.log('executed')
    return number % 2 !== 0;
    
}

function filter(numbers, fn){
    let results = [];

    for(const number of numbers){
        if(fn(number)){
            results.push(number);
        }
    }
    return results;
}

let numbers = [1, 2, 3, 4, 5];

console.log(filter(numbers,isOdd));