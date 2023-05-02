// ------- Composition
const compose = (f, g) => x => f(g(x));
const addFive = x => x + 5;
const double = x => x * 2;
const addFiveAndDouble = compose(double, addFive);
const result = addFiveAndDouble(3);
console.log(result);

// ---------------
function composed(f,g) {
    return function(x) {
        return f(g(x))
    }
}

function add5(x) {
    return x+5;
}

// const add5 = (x) => {
//    return x+5; }

// const add5 = x => x+5;

function dou2(x) {
    return x*2
}

// const dou2 = (x) => {
//    return x*2;
//}

// const dou2 = x => x*2;

function add5dou2(x) {
    return (x+5)*2
}

// const add5dou2 = (x) => {
//    return (x+5)*2
//}

// const add5dou2 = x => (x+5)*2

// const add5dou2 =  x => dou2(add5(x))


// ============================= array's functions methods ==============================
const products = [
    { id: 1, name: "Laptop", price: 1000, category: "Electronics", rating: 4.5 },
    { id: 2, name: "Phone", price: 800, category: "Electronics", rating: 4.7 },
    { id: 3, name: "Shoes", price: 120, category: "Clothing", rating: 3.9 },
    { id: 4, name: "Bag", price: 80, category: "Accessories", rating: 4.2 },
    { id: 5, name: "Tablet", price: 600, category: "Electronics", rating: 4.0 },
];

const isElectronic = product => product.category === "Electronics";
const discount = product => ({ ...product, price: product.price * 0.9 });
const totalPrice = (accumulator, product) => accumulator + product.price;
const hasHighRating = product => product.rating >= 4.0;
const findIndexById = (id) => (product) => product.id === id;
const discountedTotalForHighRatedElectronics = products
 .filter(isElectronic)
 .filter(hasHighRating)
 .map(discount)
 .reduce(totalPrice, 0);
console.log(discountedTotalForHighRatedElectronics);
const targetId = 3;
const targetIndex = products.findIndex(findIndexById(targetId));
console.log(targetIndex);
const targetProduct = products.find(findIndexById(targetId));
console.log(targetProduct);


// ====================== REGEX =======================================

const re = /car/;
const reg = /car/g; // g means global search
// This 👇🏼 can get variables
const re1 = new RegExp('car');
let var1 = 'home'
const re2 = new RegExp(var1)
const rer2 = new RegExp(var1)

console.log('parachute'.match('chute')) // [ 'chute', index: 4, input: 'parachute', groups: undefined ]
console.log('parachute'.match(/chute/)) // [ 'chute', index: 4, input: 'parachute', groups: undefined ]

console.log('parachute for everyone for happiness'.match(/for/)) // ['for', index: 10, input: parachute for everyone for happiness',groups: undefined]
console.log('parachute for everyone for happiness'.match(/for/g)) // [ 'for', 'for' ]

// beginning with para
console.log('paracaidas para todos con parapente y compararacion'.match(/^para/))
// ending with paracion
console.log('paracaidas para todos con parapente y comparacion'.match(/paracion$/))

// ----- Validation -----
// Check whether is an email address or not.

// ======================== Assignment ========================

let emails = [
    'john.doe@example.com',
    'jane_doe+shopping@example.org',
    'alice.smith+work@example.co.uk',
    'charlie.brown+newsletter@example.io',
    'emily.watson+notes@example.net',]


    function checkEmail(emails) {
        const emailChecker = /^[\w._%+-]+(\+[\w_%+-]+)?@[\w.]+\.[a-zA-Z]{2,8}$/;
        const subaddressing = /\+[\w]+\@/

        const emailFilter = email => email.match(emailChecker)

        const emailMapper =  email => {
            if (email.match(subaddressing)) {
                return email.replace(subaddressing, '@')
            }
            return email
            }
    
        console.log(emails
            .filter(emailFilter)
            .map(emailMapper));
        
        }
    
    checkEmail(emails)



