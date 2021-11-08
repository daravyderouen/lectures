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

  for (let attribute in dog) { // <<<<a for in loop //
    console.log(`The dog's ${attribute} is ${dog[attribute]}.`);
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

  
  