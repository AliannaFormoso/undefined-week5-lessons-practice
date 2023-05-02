// ------------------------ ECMASCRIPT 2015 ------------------------------

function greetings(name = 'Friend') {
    console.log(`Hello ${name}`)
}
greetings() // Hello Friend
greetings('Life') // Hello Life

// arguments 
function listFruits() {
    console.log(arguments)
}
listFruits('banana', 'pineapple', 'apple', 'melon')
// [Arguments] {
//   '0': 'banana',
//   '1': 'pineapple',
//   '2': 'apple',
//   '3': 'melon'
// }

// rest parameters
function listingFruits(favoriteFruit, secondFavorite, ...fruits) {
    console.log(favoriteFruit);
    console.log(secondFavorite);
    console.log(fruits)
}
listingFruits('guava', 'cherry', 'banana', 'pineapple', 'apple', 'melon')
// guava
// cherry
// [ 'banana', 'pineapple', 'apple', 'melon' ]


// for loops
function foringEach(...fruits) {
    fruits.forEach(fruit =>
        console.log(fruit))
}
foringEach('banana', 'pineapple', 'apple', 'melon')
// banana
// pineapple
// apple
// melon


//for in indexes
function foringInIndex(...fruits) {
    for (let i in fruits) {
        console.log(i)
    }
}
foringInIndex('banana', 'pineapple', 'apple', 'melon')
// 0
// 1
// 2
// 3

function foringIn(...fruits) {
    for (let i in fruits) {
        console.log(fruits[i])
    }
}
foringIn('banana', 'pineapple', 'apple', 'melon')
// banana
// pineapple
// apple
// melon


// for of
function foringOf(...fruits) {
    for (let fruit of fruits) {
        console.log(fruit)
    }
}
foringOf('banana', 'pineapple', 'apple', 'melon')
// banana
// pineapple
// apple
// melon



//head tail
const fruits = ['banana', 'pineapple', 'apple', 'melon']
console.log(fruits[0]) // banana
console.log(fruits.slice(1)) // [ 'pineapple', 'apple', 'melon' ]

const head = fruits[0]
const tail = fruits.slice(1)

const human = { name: 'PP', lastname: 'OO' }
const name1 = human.name
const lastname1 = human.lastname

// Object Destructuring
const { name, lastname } = human // PP OO

// array detructuring

// ---------------------------------------------  spread    -----------------------
const [head1, ...tail1] = fruits
head1 // banana
tail1 // [ 'pineapple', 'apple', 'melon' ]

const newFruits = ['mango', 'soursop', ...tail1, tail1]
console.log(newFruits)
// [
//     'mango',
//     'soursop',
//     'pineapple',
//     'apple',
//     'melon',
//     [ 'pineapple', 'apple', 'melon' ]
//   ]

// spreading newFruits

const spreadingNewFruits = [...newFruits]
console.log(spreadingNewFruits)
// [
//     'mango',
//     'soursop',
//     'pineapple',
//     'apple',
//     'melon',
//     [ 'pineapple', 'apple', 'melon' ]
//   ]


// Maps
const mapnumbers = new Map()
mapnumbers.set('one', 1)
mapnumbers.set('two', 2)

mapnumbers.get('one') // 1
mapnumbers.get('two') //2

console.log(mapnumbers) // Map(2) { 'one' => 1, 'two' => 2 }


// Sets
const setnumbers = new Set()
setnumbers.add(1)
setnumbers.add(2)
console.log(setnumbers) // Set(2) { 1, 2 }

// Getting rid of duplicates with set
const duplicatenumbers = [1, 2, 2, 2, 3, 3, 1, 4, 4, 5, 6, 7, 7]
console.log(new Set(duplicatenumbers)) // Set(7) { 1, 2, 3, 4, 5, 6, 7 }

//Making it an array
const dedupArray = [...new Set(duplicatenumbers)]
console.log(dedupArray)
// [
//     1, 2, 3, 4,
//     5, 6, 7
//   ]


// Symbols
const s1 = Symbol('Ali')
const s2 = Symbol('Ali')
s1 === s2 // false



// Classes
class Dog {

    name;
    constructor(name = 'Firu') {
        this.name = name
    }

    bark() {
        console.log(`${this.name} woff, woff!`);
    }

    run() {
        console.log(`${this.name} run run!`);
    }
}

const brownie = new Dog('Brownie')
console.log(brownie.name) // Brownie
brownie.bark() // Brownie woff, woff!
const cookie = new Dog('Cookie')
console.log(cookie.name) // Cookie
cookie.bark() // Cookie woff, woff!
cookie.run() // Cookie run run!

// ------------------------ ECMASCRIPT 2016 ------------------------------


// exponentiation (**) operator
console.log(5 ** 2) // 25

// Array.prototype.includes
const pets = ['cat', 'dog', 'bat']
pets.includes('cat') // true
const petsArray = Array(...pets)
console.log(petsArray) //  ['cat', 'dog', 'bat']

// ------------------------ ECMASCRIPT 2017 ------------------------------
// - – Class static methods
class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    value() {
        return this.price * this.quantity
    }

    static totalValue(products) {
        let total = 0;
        for (const product of products) {
            total += product.value();
        }

        return total
            ;
    }
}

const tshirts = new Product('T-shirt', 20, 10)
console.log(tshirts.value()) // 200
const pants = new Product('Pants', 50, 5)
console.log(pants.value()) // 250

const inventory = [tshirts, pants]
console.log(Product.totalValue(inventory)) // 450

// -- String Padding
"5".padStart(3, 0) // 005
"E".padStart(4, "I") // IIIE
console.log("10".padEnd(5, "X"))  // 10XXX

// Trailing comma is legal


// ------------------------ ECMASCRIPT 2018 ------------------------------

// Object rest/spread properties
const cat = { name: "Kitty" }
const cat2 = { ...cat, nickname: 'Kit' } // {name:'Kitty',nickname:'Kit'}

// Promise
function checkMail() {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve('You got an email');
        } else {
            reject(new Error('You have not email'))
        }
    })
}

checkMail()
    .then(mail => console.log(mail))
    .catch(mail => console.log(mail))
    .finally(mail => console.log('Checked'))


// ------------------------ ECMASCRIPT 2019 ------------------------------
//– Object.fromEntries
const obj = Object.fromEntries([
    ["foo", "bar"],
    ["baz", "42"]
])

console.log(obj); // { foo: 'bar', baz: '42' }

// - – Array.prototype.{flat, flatMap}
const moreFruits = ['Peach', fruits]
console.log(moreFruits) // [ 'Peach', [ 'banana', 'pineapple', 'apple', 'melon' ] ]
// Making it flat or flatten it
console.log(moreFruits.flat()) // [ 'Peach', 'banana', 'pineapple', 'apple', 'melon' ]

// flat map
let yum = moreFruits.flat().map(fruit => `${fruit} yummy!`)
console.log(yum)
// [
//     'Peach yummy!',
//     'banana yummy!',
//     'pineapple yummy!',
//     'apple yummy!',
//     'melon yummy!'
//   ]

// flatMap
console.log(moreFruits.flatMap(fruit => `${fruit} yummy!`)) //[ 'Peach yummy!', 'banana,pineapple,apple,melon yummy!' ]


// ------------------------ ECMASCRIPT 2020 ------------------------------
// BigInt
console.log(Number.MAX_VALUE) // 1.7976931348623157e+308
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991
10n

// ------------------------ ECMASCRIPT 2020 ------------------------------
//- - – String.prototype.replaceAll
'Big house, blue house'.replace('house', 'car') //'Big car, blue house'
'Big house, blue house'.replace(/house/g, 'car') //'Big car, blue car'
'Big house, blue house'.replaceAll('house', 'car') //'Big car, blue car'

// ------------------------ ECMASCRIPT 2021 ------------------------------
// - – Numeric separators
//10_000_000_000

// ------------------------ ECMASCRIPT 2022 ------------------------------
// - – Object.hasOwn. Know if an object has a property

//- Error.cause
new Error('This is an error', {
    cause: 'You write an extra comma at the end'
})

// ------------------------ ECMASCRIPT 2023 ------------------------------
// – Array find from last
const array1 = [5, 67, 89, 3, 122, 1]
console.log(array1.findLast(element => element > 45)) // 122
console.log(array1.find(element => element > 45)) // 67

// ====================== Assignment ====================================

const studentsInfo = [
    { name: "Ana", lastName: "Garcia", scores: [3, 5, 4, 4.5] },
    { name: "Luis", lastName: "Perez", scores: [4.5, 4, 4, 5] },
];

class Student {
    #name;
    #lastName;

    constructor(name, lastName) {
        this.#name = name;
        this.#lastName = lastName;
        }

    get fullName() {
        return `${this.#name} ${this.#lastName}`
    }


    static fromObject(obj) {
        const {name, lastName} =obj;
        return new Student(name, lastName);
    }

}

const popeye = new Student('Pop', "Eyes")
console.log(popeye.fullName); // Pop Eyes


function calculateAverage(students) {
    const averages = students.map(({ name, lastName, scores}) => {
        const student = Student.fromObject({
            name, lastName,
        })

        const scoresSum = scores.reduce((accumulator, score) => accumulator + score)

        const average = scoresSum/scores.length;

        return {
            fullname: student.fullName,
            average: average?.toFixed(2) ?? "N/A"
        }

        
        })

        averages.forEach(({fullname, average}) => {
            console.log(`${fullname}: ${average}`);

    })

}

calculateAverage(studentsInfo);

