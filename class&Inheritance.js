class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Creating an object from the Person class
const person1 = new Person('Raj', 22);
person1.greet(); // Output: Hello, my name is Raj and I am 22 years old.

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

// Dog class inherits from Animal class
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the parent class constructor
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog1 = new Dog('Buddy', 'Golden Retriever');
dog1.speak(); // Output: Buddy barks.
