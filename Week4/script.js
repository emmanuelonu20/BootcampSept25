//JS object
let car1 = {make: 'Toyota', model: 'Corolla', color: 'Black'};
let person1 = {height: 2.6, age: 23, country: 'Japan'};

let names = ['John', 'Peter', 'Victoria'];

console.log(names[1]); //Peter
console.log(car1['model']); //Corolla
console.log(car1.model); //Corolla

console.log(person1['age']); //Yannie
console.log(person1.age); //23

//Array of objects
let students = [
    {firstName: 'John', lastName: "Wick", age: 34, department: 'Mathematics'},
    {firstName: 'Jennifer', lastName: "Lopez", age: 25, department: 'Music'},
    {firstName: 'Michael', lastName: "Bolton", age: 45, department: 'Economics'},
];

console.log(students[1].department); //Music
console.log(students[2].firstName); //Michael

class Car {
    make;
    model;
    color;

    constructor(make, model, color) {
        this.make = make;
        this.model = model;
        this.color = color;
    }
}

let car2 = new Car("Nissan", "Rogue", 'Blue');
let car3 = new Car("Mazda", 'CX60', 'White');

console.log(car2.model); //Rogue
console.log(car3.make); //Mazda