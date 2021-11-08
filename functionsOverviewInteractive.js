//string method, how to write fn, how to call fn, parameters//
//we use conditional logic in the jon snow interactive//
/*
let jonSnowHealth = 100
//jonSnowHealth = jonSnowHealth.toString()//we need to reassign it first

//console.log(typeof jonSnowHealth)//how to solve problem number 5 on arrowfunctions.js

//console.log(`Jon\'s Health is ` +  jonSnowHealth)//have to use that line in between n and apostrophe becuase it will now read the (')//
// "\" that's called an escape key to use for apostrophe
/*
let theWinnerIs = 'Jamie is the winner.'
let newWinner = theWinnerIs.replace('Jamie', 'Jon') //two parameters, but it replaces Jamie with Jon
//replace method is just for strings, no numbers//

console.log(newWinner)//prints "Jon is the winner"

let newWinnerLower = newWinner.toLocaleLowerCase()//make every single letter lowercase
let newWinnerSplit = newWinnerLower.split(' ')//an array with each word by itself
//it cut the words along the spaces and the first cut is between and Jon and is, the next cut is "is", then "the", then "winner"
let newWinnerKebob = newWinnerSplit.join('-')//the dash is the glue to glue the string back together
console.log(newWinnerKebob)//jon-is-the-winner

function isJonAlive (){//this fn checks his health if he's alive or dead
    if (jonSnowHealth > 0) {
        console.log('Jon is alive!')     
        } else {
            console.log('RIP Jon Snow');
        }
    }
isJonAlive()// if () is empty the log will be undefined because there's nothing in there, it needs a value

function surpriseAttack(attack){
    jonSnowHealth -= attack//modifying his health(change his health)
    console.log(`Jon's health is now ${jonSnowHealth}`)
    isJonAlive()//this saves us having to running it over and over putting it here
}
//these are two reusable functions 

surpriseAttack(12)
surpriseAttack(6)
surpriseAttack(20)

//creating a fn that lets two people greet each other//

function greeting(person1, person2) {
    console.log(`${person1} and ${person2} say hello to each other.`)
}

greeting('Jon Snow', 'Ned Stark') //the two parameters

//take a function and use that return//

function rollDice () {
    let possibleRoles = [1, 2, 3, 4, 5, 6]
    let randomNumber = Math.floor(Math.random() * possibleRoles.length)
    return possibleRoles[randomNumber]
}

let firstRoll = rollDice()
console.log(firstRoll)

function diceMulitplier() {
    let firstRoll = rollDice()
    let secondRoll = rollDice()
    return firstRoll * secondRoll

}

let multipledNumber = diceMulitplier()
console.log(multipledNumber)
*/


//clarification
//psuedo coding and debugging skills
//not a palidrome
//psuedo coding is think in english what you want the code to do
//first note, given a string full of words
//ex "a sentence with words in it"
//if word starts with [b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, w, x, y, z] then i want to remove the first letter from the front 
//add that letter to the back, add a "ay"
//do that with every word individually
//if it starts with [a, e, i, o, u] then just add "yay to end of word"
//write a function which takes in a string
//break the string into an array list, removing the space marks
//loop throught the list/array
        //if it starts with a constantants 
        //take first letter off
      //add the first letter to the end
        //add a "y" at the end
    //otherwise 
        //add "ay" to the end
//turn the list back into a string, adding back into the spaces
//once i turn it back into a string, i want to return it
/*
function pigLatin (string){
    let stringIntoList = string.split(" ")//break string, then console.log to check pigLatin("write this string")
    let consonants = "b,c,d,f,g,h,j,k,l,m,n,p,q,r,s,t,v,w,x,y,z"
    //console.log(stringIntoList)
    for (let i= 0; i < stringIntoList.length; i++){
        //console.log(stringIntoList[i])
        //search how do i check if a string starts with something in javascript in google
        //console.log(stringIntoList[0])
        
        if(consonants.includes(stringIntoList[i][0])){
        //search how to take something off of a string from javascript
        
            stringIntoList[i] = stringIntoList[i].slice(1) + stringIntoList[i][0] + 'ay'
            //console.log(fixedWord)
        } else {
            stringIntoList[i] = stringIntoList[i] + 'yay'
            //check again by console.log
            //console.log(fixedVowelWord)
        }
    }
    let results = stringIntoList.join(' ')
   // console.log(results)
    return results
}

let newString = pigLatin("break this string into pieces")//because newString is outside of the function, you console log it
//you can't console log anything inside the function by name
//if we're on the streets (global scope), you can't see what's inside the house (function)
console.log(newString)//prints>> reakba histay tringsay intoyay iecespay

//GOING OVER SCOPES//

let flour = "cake flour"
let eggs = "duck eggs"
let milk = "goat milk"

function makeWaffles(){
    let flour = "rice flour"
    let milk = "almond milk"

    console.log(`I am making waffles with ${flour} and ${eggs} and ${milk}`)
}

//must invoke function by typing out "makeWaffles() <<empty>>"
makeWaffles()


*/
//CLASS OF OBJECTS//
/*
class Dog {
    constructor(name, breed, age){
        this.name = name
        this.breed = breed
        this.age =age
    }

    greeting () {
        console.log (`Hi, my name is ${this.name} and I am ${breed} dog ${age}`)

    }

}

let lassie = new Dog('Lassie', 'Collie', 18)

*/

class Cat {
    constructor(name, attitude, breed, age){
        this.name = name
        //name will be a string
        this.attitude = attitude
        //attitude will be a boolean
        this.breed = breed
        //breed is also a string
        this.age = age
        //age is a number
    }

    greeting () {
        if (this.attitude === true){
            console.log("Hey punk")
        } else {
            console.log("Hi there")
        }
    }
}

let henri = new Cat ("Henri", true, "Chubby boy", 14)
let pyxis = new Cat ("Pyxis", false, "Skinny lad", 14)

console.log(henri)
console.log(pyxis)

console.log(henri.name)

class Kitten extends Cat {
    constructor (name, attitude, breed, age, isSuperCute){
        super(name, attitude, breed, age)
        this.isKitten = isSuperCute
    }
    }

let cuteKitten = new Kitten ('Mittens', false, 'skinny', 10, true)

console.log(cuteKitten)

/*
function add(num1, num2){
    return num1 + num2
}

console.log(add(2,3))

let giveMeFive = (cb) => {
    let myFive = 5//declare myfive as #5
    return cb(myFive, 8)//then add 5
    
}
console.log(giveMeFive(add))//gives 13
//console.log(add(4,5))
*/
//subtract//
function add(num1, num2) {
    return num1 + num2
}

function subtract (num1, num2){
    return (num1 - num2)
}

let giveMeFive = (cb) => {
    let myFive = 5
    return cb(myFive, 8)
}
let result = giveMeFive(subtract)
console.log(result)


let hasCake = (cb) => {
    let cakeString = "has cake"
    return cb(cakeString)
    //can be written return cb("has cakes" and take out let cakeString =)
}
let giveItToCindy = (string) => {
    let newString = `Cindy ${string}`
    return newString //or rewrite it as below
}//let giveItToCindy = (string) => 
//(return `Cindy ${string})


console.log(hasCake(giveItToCindy));//prints has cake



let randomFunc = () => " this is an example"
let example1 = 'this is example'
let example2 = randomFunc()
console.log(example1, example2)

const orders = [{"price":15,"tax":0.09},{"price":42,"tax":0.07},{"price":56,"tax":0.11},
{"price":80,"tax":0.11},{"price":69,"tax":0.06},{"price":68,"tax":0.14},
{"price":72,"tax":0.14},{"price":51,"tax":0.09},{"price":89,"tax":0.15},
{"price":48,"tax":0.13}];

//psuedo code first
//receiving an array of objects each object represents 1 order
//look at each order individually, inside of that I need to calculate the final price base off of the price and tax (fn that runs for the element)

//higher order method, then a cb inside of it

//write a method that takes in an array and a cb fn 
//define what cb fn is, it's going to need to look & resolve everything in one price
//write a cb fn that takes in a 2 numPrice, numTaxRate
//returns a single number that represents orders final price
//loop through the array running the cb on each element 
//push new number to new array of final prices
//return new array

const higherFunction = (arr, cb) =>{
    let results = arr.map((element, index, array)=> {
        return cb(element.price, element.tax)
        //cb()//children can always see the information of the parent but the parent can't see info of the children
    })
    return results
}


const calculateFinalCost = (price, taxRate) => {

     let tax = price * taxRate
     //console.log(price * taxRate)
     return price + tax
}

let results = higherFunction(orders, calculateFinalCost)//calling the function and the variable that the function used for it

console.log(results)