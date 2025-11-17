
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

interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (book: Book) => {
    const availability = book.isAvailable === true ? "Yes" : "No"
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`)
}

const myBook: Book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true,
};

printBookDetails(myBook);




const getUniqueValues = (array1: (string | number)[], array2: (string | number)[]): (string | number)[] => {
    let result: (string | number)[] = []
    for (let value of array1) {
        result[result.length] = value
    }
    for (let value of array2) {
        let duplicate = false
        for (let number of result) {
            if (number === value) {
                duplicate = true;
                break;
            }
        }
        if (!duplicate) {
            result[result.length] = value
        }
    }
    return result
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

interface Products {
    name: string;
    price: number;
    quantity: number;
    discount?: number
}

const calculateTotalPrice = (products: Products[]): number => {
    if(products.length === 0) return 0;
    const total = products.reduce((sum, product) => {
        let productPrice = product.price * product.quantity
        if (product.discount) {
            productPrice = productPrice - (productPrice * (product.discount / 100))
        }
        return sum + productPrice
    }, 0)
    return total

}

const products = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];


