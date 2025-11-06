var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var firstName = "John";
var lastName = "Smith";
firstName = "Peter";
console.log(firstName + ' : ' + lastName);
var items = ["Vardy", "34", "56", "true"];
var someValue = ["Peter", 34];
var person = { name: 'Peter Pan', age: 34, country: 'Canada' };
var Person = /** @class */ (function () {
    //constructor
    function Person(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    //Method
    Person.prototype.getInfo = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age, ", Country: ").concat(this.country); //Name: John Wick, Age: 34, Country: Brazil
        //return 'Name: ' + this.name + ', Age: ' + this.age + ', Country: ' + this.country;
    };
    return Person;
}());
var person1 = new Person("Peter Smith", 78, 'Peru');
console.log(person1);
var person2 = new Person("Jennifer Benneth", 12, 'China');
console.log(person2.getInfo());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, country, dept) {
        var _this = _super.call(this, name, age, country) || this; //calling the parent constructor
        _this.department = dept;
        return _this;
    }
    Student.prototype.getInfo = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age, ", Country: ").concat(this.country, ", Department: ").concat(this.department);
    };
    return Student;
}(Person));
var student1 = new Student("Victoria Ken", 22, 'Canada', "Economics");
console.log(student1.getInfo());
var person4 = { name: "Ben Ken", age: 34, country: "US" };
