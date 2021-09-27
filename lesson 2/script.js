let numX = parseInt(prompt('Write a number from 0 - 100'));
let numM = parseInt(prompt('Write a number from 0 - 100'));

let skipEven = confirm('Skip even?');

let result = null;
for(let i = numX; i <= numM; i++){
        if(skipEven && !(i % 2)){
            continue;  
        }
    result += i;
};
console.log(result);