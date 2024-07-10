console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
let i = 1
for(i = 1; i <= 100; i++){
    if(i % 2 != 0){
        console.log(i)
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log(`${i} FIZZBUZZ`)
    }
    else if(i % 3 == 0){
        console.log(`${i} FIZZ`)
    }
    else if(i % 5 == 0){
        console.log(`${i} BUZZ`)
    }
    else{
        console.log(i)
    }
}
// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
console.log("While Loop")
let j = 1
while (j <= 100){
    if(j % 3 == 0 && j % 5 == 0){
        console.log(`${j} FIZZBUZZ`)
    }
    else if(j % 3 == 0){
        console.log(`${j} FIZZ`)
    }
    else if(j % 5 == 0){
        console.log(`${j} BUZZ`)
    } 
    else{
        console.log(j)
    }
    j++
}
console.log("Do-While Loop")
let k = 1
do{
    if(k % 3 == 0 && k % 5 == 0){
        console.log(`${k} FIZZBUZZ`)
    }
    else if(k % 3 == 0){
        console.log(`${k} FIZZ`)
    }
    else if(k % 5 == 0){
        console.log(`${k} BUZZ`)
    } 
    else{
        console.log(k)
    }
    k++
}while(k <= 100);
// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
let s = 1;
let found = false;
for(s = 1; s <= n; s++){
    if (s === value){
        console.log('Found value!');
        found = true;
        break;
    }    
}
if (!found){
    console.log('Did not find value.');
}
// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let p = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);
console.log(`Fizz Divisor: ${fizzDivisor} Buzz Divisor: ${buzzDivisor}`)
for(let z = start; z <= p; z++){
    if(z % fizzDivisor == 0 && z % buzzDivisor == 0){
        console.log(`${z} FIZZBUZZ`)
    }
    else if(z % fizzDivisor == 0){
        console.log(`${z} FIZZ`)
    }
    else if(z % buzzDivisor == 0){
        console.log(`${z} BUZZ`)
    }
    else{
        console.log(z)
    }
}