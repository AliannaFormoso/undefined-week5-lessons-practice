// Callback

const ONE_SEC_IN_MS = 1000

function cook(ingredient, callback, time) {
    setTimeout(function () {
        // console.log(ingredient)
        if (ingredient == 'Table') {
            callback(`${ingredient} is set! 🍽️`)
        } else {
            callback(`${ingredient} is done! 😋`);
        }
    }, time * ONE_SEC_IN_MS)
}

// cook('Rice', console.log, 7)
// cook('Egg', console.log, 3)
// cook('Table', console.log, 2)

// Asynchronism synchronism
// Wait until rice is done

// cook('Rice', function(ingredient) {
//     console.log(`${ingredient} is done already! ✅`)
//     cook('Egg', console.log, 3)
//     cook('Salad', console.log, 2)
// }, 5 )

// callback hell
// Wait until rice is done, then wait until egg is done to do the salad 
cook('Rice', function (ingredient) {
    console.log(`${ingredient} is done already! ✅`)

    cook('Egg', function (ingredient) {
        console.log(`${ingredient} is done already! ✅`)
        cook('Salad', console.log, 2)
    }, 3)
}, 5)



// Promises

function slowsquare(number, callback) {
    let result = number ** 2;

    setTimeout(function () {
        callback(result)
    }, 2000)
}


console.log('Calculating squares...')
// slowsquare(2, console.log)

slowsquare(2, function (result) {
    slowsquare(result, function (result) {
        slowsquare(result, console.log)
    })
})


// real promises ------------------------------
function promiseSquare(number) {
    return new Promise(function (resolve) {
        const result = number ** 2;

        setTimeout(function () {
            resolve(result);
        }, 2000)
    })
}

promiseSquare(3)
    .then(console.log)

// concatenating promises ----------------------------------
function longerPromiseSquare(number) {
    return new Promise(function (resolve) {
        const result = number ** 2;

        setTimeout(function () {
            resolve(result);
        }, 2000)
    })
}

function calculate(result) {
    return longerPromiseSquare(result, console.log)
}

longerPromiseSquare(5)
    .then(calculate)
    .then(calculate)
    .then(console.log) // 390625


// other example with sum 
function sumPromise(number) {
    return new Promise(function (resolve) {
        const result = number ** 2;

        setTimeout(function () {
            resolve(result);
        }, 2000)
    })
}

function calculate(result) {
    return sumPromise(result, console.log)
}

sumPromise(7)
    .then(function (result) { return result; })
    .then(function (result) { return result + 2; })
    .then(function (result) { return result + 5; })
    .then(console.log) // 56



// fetch
// getting a breed list from Dog API
fetch("https://dog.ceo/api/breeds/list/all")
    .then(function (data) {
        return data.json()
    })
    .then(function (jsonData) {
        console.log(jsonData)
    })

/*{
    message: {
      affenpinscher: [],
      african: [],
      airedale: [],
      akita: [],
      appenzeller: [],
      australian: [ 'shepherd' ],
      basenji: [],
      beagle: [],
      bluetick: [],
      borzoi: [],
      bouvier: [],
      boxer: [],
      brabancon: [],
      briard: [],
      buhund: [ 'norwegian' ],
      bulldog: [ 'boston', 'english', 'french' ],
      bullterrier: [ 'staffordshire' ],
      cattledog: [ 'australian' ],
      chihuahua: [],
      chow: [],
      clumber: [],
      cockapoo: [],
      collie: [ 'border' ],
      coonhound: [],
      corgi: [ 'cardigan' ],
      cotondetulear: [],
      dachshund: [],
      dalmatian: [],
      dane: [ 'great' ],
      deerhound: [ 'scottish' ],
      dhole: [],
      dingo: [],
      doberman: [],
      elkhound: [ 'norwegian' ],
      entlebucher: [],
      eskimo: [],
      finnish: [ 'lapphund' ],
      frise: [ 'bichon' ],
      germanshepherd: [],
      greyhound: [ 'italian' ],
      groenendael: [],
      havanese: [],
      hound: [
        'afghan', 'basset',
        'blood',  'english',
        'ibizan', 'plott',
        'walker'
      ],
      husky: [],
      keeshond: [],
      kelpie: [],
      komondor: [],
      kuvasz: [],
      labradoodle: [],
      labrador: [],
      leonberg: [],
      lhasa: [],
      malamute: [],
      malinois: [],
      maltese: [],
      mastiff: [ 'bull', 'english', 'tibetan' ],
      mexicanhairless: [],
      mix: [],
      mountain: [ 'bernese', 'swiss' ],
      newfoundland: [],
      otterhound: [],
      ovcharka: [ 'caucasian' ],
      papillon: [],
      pekinese: [],
      pembroke: [],
      pinscher: [ 'miniature' ],
      pitbull: [],
      pointer: [ 'german', 'germanlonghair' ],
      pomeranian: [],
      poodle: [ 'medium', 'miniature', 'standard', 'toy' ],
      pug: [],
      puggle: [],
      pyrenees: [],
      redbone: [],
      retriever: [ 'chesapeake', 'curly', 'flatcoated', 'golden' ],
      ridgeback: [ 'rhodesian' ],
      rottweiler: [],
      saluki: [],
      samoyed: [],
      schipperke: [],
      schnauzer: [ 'giant', 'miniature' ],
      segugio: [ 'italian' ],
      setter: [ 'english', 'gordon', 'irish' ],
      sharpei: [],
      sheepdog: [ 'english', 'shetland' ],
      shiba: [],
      shihtzu: [],
      spaniel: [
        'blenheim',
        'brittany',
        'cocker',
        'irish',
        'japanese',
        'sussex',
        'welsh'
      ],
      spitz: [ 'japanese' ],
      springer: [ 'english' ],
      stbernard: [],
      terrier: [
        'american',     'australian',
        'bedlington',   'border',
        'cairn',        'dandie',
        'fox',          'irish',
        'kerryblue',    'lakeland',
        'norfolk',      'norwich',
        'patterdale',   'russell',
        'scottish',     'sealyham',
        'silky',        'tibetan',
        'toy',          'welsh',
      tervuren: [],
      vizsla: [],
      waterdog: [ 'spanish' ],
      weimaraner: [],
      whippet: [],
      wolfhound: [ 'irish' ]
    },
    status: 'success'
  }*/


// ------------ fetch().then(data =>.json())------------------------



// manipulating a list got from dog api. Working with fetch
fetch("https://dog.ceo/api/breeds/list/all")
.then(function(dataBreeds) {
    return dataBreeds.json()
})
.then(function(breedsJsonData){
    const { message } = breedsJsonData
   // getting just the keys 
    const dogBreeds=Object.keys(message)
    // getting them but joined by 
    console.log(dogBreeds.join(" |-|-| "))
})

/*}
affenpinscher |-|-| african |-|-| airedale |-|-| akita |-|-| appenzeller |-|-| australian |-|-| basenji |-|-| beagle |-|-| bluetick |-|-| borzoi |-|-| bouvier |-|-| boxer |-|-| brabancon |-|-| briard |-|-| buhund |-|-| bulldog |-|-| bullterrier |-|-| cattledog |-|-| chihuahua |-|-| chow |-|-| clumber |-|-| cockapoo |-|-| collie |-|-| coonhound |-|-| corgi |-|-| cotondetulear |-|-| dachshund |-|-| dalmatian |-|-| dane |-|-| deerhound |-|-| dhole |-|-| dingo |-|-| doberman |-|-| elkhound |-|-| entlebucher |-|-| eskimo |-|-| finnish |-|-| frise |-|-| germanshepherd |-|-| greyhound |-|-| groenendael |-|-| havanese |-|-| hound |-|-| husky |-|-| keeshond |-|-| kelpie |-|-| komondor |-|-| kuvasz |-|-| labradoodle |-|-| labrador |-|-| leonberg |-|-| lhasa |-|-| malamute |-|-| malinois |-|-| maltese |-|-| mastiff |-|-| mexicanhairless |-|-| mix |-|-| mountain |-|-| newfoundland |-|-| otterhound |-|-| ovcharka |-|-| papillon |-|-| pekinese |-|-| pembroke |-|-| pinscher |-|-| pitbull |-|-| pointer |-|-| pomeranian |-|-| poodle |-|-| pug |-|-| puggle |-|-| pyrenees |-|-| redbone |-|-| retriever |-|-| ridgeback |-|-| rottweiler |-|-| saluki |-|-| samoyed |-|-| schipperke |-|-| schnauzer |-|-| segugio |-|-| setter |-|-| sharpei |-|-| sheepdog |-|-| shiba |-|-| shihtzu |-|-| spaniel |-|-| spitz |-|-| springer |-|-| stbernard |-|-| terrier |-|-| tervuren |-|-| vizsla |-|-| waterdog |-|-| weimaraner |-|-| whippet |-|-| wolfhound*/

// getting just the las 5 of them
fetch("https://dog.ceo/api/breeds/list/all")
.then(function(data5Breeds) {
    return data5Breeds.json()
})
.then(function(breedsJson5Data){
    const { message } = breedsJson5Data
   // getting just the keys 
    const dog5Breeds=Object.keys(message)
    // getting the last 5
    console.log(dog5Breeds.slice(-5))
}) // [ 'vizsla', 'waterdog', 'weimaraner', 'whippet', 'wolfhound' ]

// to organize them : console.log(dog5Breeds.sort()) -- console.log(dog5Breeds.sort().reverse())



// ------------------- Async / Await ------------------------

// ------------------- Assignment ------------------------

function printNr10s() {
    setTimeout(function() {
        console.log('1️⃣')
    }, 1000)
    setTimeout(function() {
        console.log('2️⃣')
    }, 2000)
    setTimeout(function() {
        console.log('3️⃣')
    }, 3000)
    setTimeout(function() {
        console.log('4️⃣')
    }, 4000)
    setTimeout(function() {
        console.log('5️⃣')
    }, 5000)
    setTimeout(function() {
        console.log('6️⃣')
    }, 6000)
    setTimeout(function() {
        console.log('7️⃣')
    }, 7000)
    setTimeout(function() {
        console.log('8️⃣8')
    }, 8000)
    setTimeout(function() {
        console.log('9️⃣')
    }, 9000)
    setTimeout(function() {
        console.log('🔟')
    }, 10000)
}
printNr10s()


// 2nd try 

function printing10Numbers() {
    const TIMES = 1000
    setTimeout(function() {
        console.log('--- 1');
        setTimeout(function() {
            console.log('--- 2');
            setTimeout(function() {
                console.log('--- 3');
                setTimeout(function() {
                    console.log('--- 4');
                    setTimeout(function() {
                        console.log('--- 5');
                        setTimeout(function() {
                            console.log('--- 6');
                            setTimeout(function() {
                                console.log('--- 7');
                                setTimeout(function() {
                                    console.log('--- 8');
                                    setTimeout(function() {
                                        console.log('--- 9');
                                        setTimeout(function() {
                                            console.log('--- 10');
                                        }, TIMES)
                                    }, TIMES)
                                }, TIMES)
                            }, TIMES)
                        }, TIMES)
                    }, TIMES)
                }, TIMES)
            }, TIMES)
        }, TIMES)
    }, TIMES)
}
printing10Numbers()


// Taking profe's guide

function foring() {
    const TIMES = 1000

    for (let i = 1; i <=10; i++) {
        setTimeout(function() {
            console.log('- Number:', i)
        }, TIMES * i)
    }
}

foring()


// Professor's solution
 //const ONE_SEC_IN_MS = 1000

 function main() {
    for (let i = 1; i <=10; i++) {
        function printing() {console.log(i)}
        setTimeout(printing, ONE_SEC_IN_MS * i)
    }
 }