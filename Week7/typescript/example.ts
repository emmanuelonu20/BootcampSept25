let firstName:string = "John";
let lastName = "Smith";

firstName = "Peter";
console.log(firstName + ' : ' + lastName);

let items:string[] = ["Vardy", "34", "56", "true"];

let someValue:[string, number] = ["Peter", 34];

let person = {name: 'Peter Pan', age: 34, country: 'Canada'};

class Person {
    //properties
    name: string;
    age: number;
    country: string;

    //constructor
    constructor(name: string, age: number, country: string){
        this.name = name;
        this.age = age;
        this.country = country;
    }

    //Method
    getInfo(){
        return `Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`; //Name: John Wick, Age: 34, Country: Brazil
        //return 'Name: ' + this.name + ', Age: ' + this.age + ', Country: ' + this.country;
    }
}

let person1 = new Person("Peter Smith", 78, 'Peru');
console.log(person1);

let person2 = new Person("Jennifer Benneth", 12, 'China');
console.log(person2.getInfo());

class Student extends Person {
    department: string;

    constructor(name: string, age: number, country: string, dept: string){
        super(name, age, country); //calling the parent constructor
        this.department = dept;
    }

    getInfo(){
        return `Name: ${this.name}, Age: ${this.age}, Country: ${this.country}, Department: ${this.department}`; 
    }
}

let student1 = new Student("Victoria Ken", 22, 'Canada', "Economics");
console.log(student1.getInfo());

interface Iperson {
    name: string;
    age: number;
    country: string;
}

let person4: Iperson = {name: "Ben Ken", age: 34, country: "US"};