
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

interface Item {
    title: string;
    rating: number
}

const filterByRating = (books: Item[]): Item[] => {
    const filterItems = books.filter(book => book.rating >= 4)
    return filterItems
}

const books = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
];

interface Users {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

const filterActiveUsers = (users: Users[]): Users[] => {
    const filterActiveUsers = users.filter(user => user.isActive === true)
    return filterActiveUsers
}

const users = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

console.log(filterActiveUsers(users));

