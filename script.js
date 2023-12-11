// Constructor function for Person
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add a method to the Person prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Constructor function for Employee, inheriting from Person
function Employee(name, age, jobTitle) {
  // Call the Person constructor with the current instance
  Person.call(this, name, age);

  this.jobTitle = jobTitle;
}

// Inherit the Person prototype in the Employee prototype
Employee.prototype = Object.create(Person.prototype);

// Add a method to the Employee prototype
Employee.prototype.jobGreet = function () {
  console.log(
    `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
  );
};

// Example usage:
const person = new Person("John", 30);
person.greet(); // Output: Hello, my name is John, I am 30 years old.

const employee = new Employee("Alice", 25, "Software Engineer");
employee.greet(); // Output: Hello, my name is Alice, I am 25 years old.
employee.jobGreet(); // Output: Hello, my name is Alice, I am 25 years old, and my job title is Software Engineer.
