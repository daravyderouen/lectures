

const dog = {
    name : "Frieda",
    color : "Brown/Black",
    hunger : 40, 
    mood : "feisty",
    age : 9,

};

console.log(dog.name) //prints Frieda//
let varToBeUsed = 'hunger'
console.log(dog[varToBeUsed])//prints Frieda//

let {name, color, age} = dog

console.log(`${name} is a ${color} dog who is ${age} years old.`)
//Frieda is a Brown/Black dog who is 9 years old.//

//function can get global values but global values can't get inside to get function values//


  const dog2 = {
    name: 'Buddy',
    color: 'gray',
    age: 1
  }
  
  const {age: freidaAge} = dog
  const {age: buddyAge} = dog2

  for (let key in dog) { // <<<<a for in loop //
    console.log(`The dog's ${key} is ${dog[key]}.`);
  } 

  /*
  prints
  The dog's name is Frieda.
  The dog's color is Brown/Black.
  The dog's hunger is 40.
  The dog's mood is feisty.
  The dog's age is 9.

You're iterating through keys. Instead of doing i++, attribute does it's on ++, this is specifically
working with objects. 

  */

let person = {
    firstName : "Chandler",
    lastName : "Bang",
    age : 34 
}

console.log(person.firstName)//prints Chandler//
console.log(person['firstName'])//prints Chandler//
//it is less common to use bracket notation, subscripting//

//destructoring//

let meal = {
    appetizer : "chips & salsa",
    entree : "al pastor burrito",
    dessert : "churros",
    drink : "dr. pepper"
}

const {dessert} = meal
console.log (dessert) //prints churros//

//practice destructiong muliple values//

const {appetizer, entree} = meal
//console.log(appetizer)//prints chips & salsa//
//console.log(entree)// prints al pastor burrito//

//destructoring allows to access them faster//

//RENAMING SYNTHAX//
const {drink: bestSodaEver} = meal
console.log(bestSodaEver)//prints dr. pepper//

//in the future when you're working with mulitple objects//
//we renamed the key, destructed the drink//
//doing this is the exact same as this below//
//const bestSodaEver = meal.drink//
//it achieves the same goal//


const myAppetizer = meal.appetizer
const myEntree = meal.entree
const myDessert = meal.dessert
const myDrink = meal.drink


//or we can do it one line//
const { appetizer: myAppetizer, entree: myEntree, dessert: myDessert, drink: myDrink} = meal

console.log(bestSodaEver)//prints dr. pepper//
console.log(myDrink)//prints dr. pepper//

//LOOPING//
//loop over keys in an object//

for (let key in person) {
    console.log(key)
}
//in order to get a value return one must use subscript//

for (key in person){
    console.log(person[key])
}//prints 34, second loop is accessing the age and the value of that key//

//does not work with dot notation!! Only with brackets aka subscripting//

//ADDING PROPERTIES//

person.job = "Statistical Analysis and Data Reconfiguration"

person['pets'] = ["Chicken", "Duck"]

for (let key in person) {
    console.log(key)
}//prints "job" & "pets"//

// DELETING PROPERTIES//

let teams = {
    teamOne : ['Ryan', 'Alex'],
    teamTwo : ['Henry', 'Cole', 'Charlie'],
    teamThree : ['Porter', 'Blake'],
    teamFour : ['Monique', 'Mariko'], 
    teamFive : ['Shania', 'Deepta']
}
//delete a team that lost//

delete teams.teamTwo

for (let team in teams){
    console.log(team)
}



//capitatlize for Classes//
class Dog {
    constructor (name, breed, age) {
        this.name = name
        this.breed = breed
        this.age = age
    }

    greeting (){ //<<greeting is a method//
        console.log(`Hi, my name is ${this.name} and I am a ${this.age} year old ${this.breed}`)
    }
}

let lassie = new Dog('Lassie', 'Collie', 18)
console.log(lassie.name)//prints Lassie//

let beethoven = new Dog ('Beethoven', 'St. Bernard', 12)
//created a whole dog class object in one line//
console.log(beethoven.breed)//prints St. Bernard//

lassie.greeting()//prints Hi, my name is Lassie and I am 18 year old Collie//
beethoven.greeting()//prints Hi, my name is Beethoven and I am a 12 year old St. Bernard.//

for (key in lassie){
    console.log(lassie[key])
}//prints out all of Lassie's information//


//JavaScript MDN also has a sandbox if you don't want to use Replit//


