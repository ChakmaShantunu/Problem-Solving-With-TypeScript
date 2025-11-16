
const formatValue = (input: string | number | boolean) => {
    if (typeof input === 'string') {
        return input = input.toUpperCase()
    } else if (typeof input === 'number') {
        return input = input * 10
    } else {
        return !input
    }
}

const getLength = (value: string | any[]): number => {
    if (typeof value === 'string') {
        return value.length
    } else if (Array.isArray(value)) {
        return value.length
    } else {
        return 0
    }
}

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`
    }
}

const person1 = new Person('John Doe', 30);
const person2 = new Person('Alice', 25);

