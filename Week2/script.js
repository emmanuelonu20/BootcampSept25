var firstName = "John";
var lastName = 'Wick';

console.log(firstName); //John

let x = 23;
let y = 11;
let result = x + y;

console.log(result); // 34

x++; // x = x + 1 = 24
result++; //35

x--; //23


x += 12; // x = x + 12 = 35


let fullName = firstName + ' ' + lastName; 
console.log(fullName); //John Wick

console.log(firstName + x); //John35


console.log(fullName.length); //9

let n = 25;

if (n > 25) {
    console.log('N is a big number');
} else {
    console.log('N is a small number');
}

let sum = 0;
for(let i = 1; i <= 10; i++) {
    console.log(`Before summation: sum = ${sum} and i = ${i}`);
    sum = sum + i;
    console.log(`After summation: sum = ${sum} and i = ${i}`);
}
console.log(sum);


let studentNames = ["Neso", "Yannie", "Shaelyn", "Rob"];

for (let index in studentNames) {
    console.log(index);
    console.log(studentNames[index]);
}

for (let i = 0; i < studentNames.length; i++) {
    console.log(studentNames[i]);
}

//while loop
let m = 1;
while (m <= 1000000){
    sum = sum + m;
    m++;
}
console.log(sum);

function add(x, y){
    let res = x + y;
    console.log('Result: ', res);
    //return res;
}

add(34, 12);
add(-12, 89);